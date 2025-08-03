# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# Variables
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket (must be globally unique)"
  type        = string
}

# S3 Bucket for hosting
resource "aws_s3_bucket" "portfolio" {
  bucket = var.bucket_name
  
  tags = {
    Name = "My Portfolio"
    Project = "Portfolio Website"
  }
}

# S3 Bucket versioning
resource "aws_s3_bucket_versioning" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id
  versioning_configuration {
    status = "Enabled"
  }
}

# S3 Bucket website configuration
resource "aws_s3_bucket_website_configuration" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"  # For React Router - redirects all 404s to index.html
  }
}

# S3 Bucket public access block
resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# S3 Bucket policy for public read access
resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id
  depends_on = [aws_s3_bucket_public_access_block.portfolio]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.portfolio.arn}/*"
      }
    ]
  })
}

# Upload React build files
resource "aws_s3_object" "portfolio_files" {
  for_each = fileset("${path.module}/build", "**/*")
  
  bucket = aws_s3_bucket.portfolio.id
  key    = each.value
  source = "${path.module}/build/${each.value}"
  
  # Set content type based on file extension
  content_type = lookup({
    "html" = "text/html"
    "css"  = "text/css"
    "js"   = "application/javascript"
    "jsx"  = "application/javascript"
    "json" = "application/json"
    "png"  = "image/png"
    "jpg"  = "image/jpeg"
    "jpeg" = "image/jpeg"
    "gif"  = "image/gif"
    "svg"  = "image/svg+xml"
    "ico"  = "image/x-icon"
    "woff" = "font/woff"
    "woff2" = "font/woff2"
    "ttf"  = "font/ttf"
    "eot"  = "application/vnd.ms-fontobject"
    "txt"  = "text/plain"
    "xml"  = "application/xml"
    "pdf"  = "application/pdf"
    "webp" = "image/webp"
    "mp4"  = "video/mp4"
    "webm" = "video/webm"
  }, split(".", each.value)[length(split(".", each.value)) - 1], "binary/octet-stream")
  
  # Cache control headers
  cache_control = lookup({
    "html" = "no-cache, no-store, must-revalidate"
    "css"  = "max-age=31536000, immutable"
    "js"   = "max-age=31536000, immutable"
    "png"  = "max-age=31536000, immutable"
    "jpg"  = "max-age=31536000, immutable"
    "jpeg" = "max-age=31536000, immutable"
    "gif"  = "max-age=31536000, immutable"
    "svg"  = "max-age=31536000, immutable"
    "ico"  = "max-age=31536000, immutable"
    "woff" = "max-age=31536000, immutable"
    "woff2" = "max-age=31536000, immutable"
    "webp" = "max-age=31536000, immutable"
  }, split(".", each.value)[length(split(".", each.value)) - 1], "max-age=86400")
  
  # Only upload if file has changed
  etag = filemd5("${path.module}/build/${each.value}")
}

# Outputs
output "bucket_name" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.portfolio.id
}

output "website_url" {
  description = "Portfolio website URL"
  value       = "http://${aws_s3_bucket_website_configuration.portfolio.website_endpoint}"
}

output "s3_website_endpoint" {
  description = "S3 website endpoint"
  value       = aws_s3_bucket_website_configuration.portfolio.website_endpoint
}

output "deployment_info" {
  description = "Deployment information"
  value = {
    bucket_name = aws_s3_bucket.portfolio.id
    region = var.aws_region
    website_url = "http://${aws_s3_bucket_website_configuration.portfolio.website_endpoint}"
    files_uploaded = length(aws_s3_object.portfolio_files)
  }
}