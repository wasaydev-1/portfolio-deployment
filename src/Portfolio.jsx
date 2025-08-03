import React, { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Server,
  Cloud,
  Database,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Abdul Wasay</h1>
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "projects", "skills", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-6xl font-bold text-white">AW</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Abdul Wasay
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-8">
              Full Stack Developer & DevOps Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <a
                href="tel:0317-8914-956"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Phone size={20} />
                0317-8914-956
              </a>
              <a
                href="mailto:wasay.devv@gmail.com"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
                wasay.devv@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/abdul-wasayy46"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/wasaydev-1"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                📚
              </div>
              Education
            </h2>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-white">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-purple-300 font-medium">Fast NUCES Karachi</p>
              <p className="text-gray-400 flex items-center gap-2 mt-2">
                <Calendar size={16} />
                Sep. 2021 – June 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {/* Developer Role */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Developer</h3>
                  <p className="text-purple-300 text-lg font-medium">
                    AheadTech360
                  </p>
                </div>
                <span className="text-gray-400 flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar size={16} />
                  Jan. 2025 – July 2025
                </span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Developed without relying on expensive premium themes,
                  resulting in significant cost savings for the company.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Implemented custom solutions to enhance store performance and
                  user experience, ensuring seamless deployment.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Designed and deployed the company's landing page, improving
                  brand presence and customer engagement.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Currently expanding expertise in additional frameworks to
                  further enhance development capabilities.
                </li>
              </ul>
            </div>

            {/* Freelance Role */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Freelance React Developer
                  </h3>
                  <p className="text-purple-300 text-lg font-medium">Voltflo</p>
                </div>
                <span className="text-gray-400 flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar size={16} />
                  Nov. 2024 – Dec. 2025
                </span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Developed interactive dashboards with React, enhancing data
                  visualization and user experience.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Integrated Google Maps APIs to implement location-based
                  features.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Identified and resolved UI issues, ensuring a seamless and
                  responsive user interface.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Managed application state effectively, determining state
                  changes based on user interactions and system logic.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Implemented and maintained route management using React Router
                  for smooth navigation and user flow.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Subscription Tracker API */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">
                  Subscription Tracker API
                </h3>
              </div>
              <p className="text-sm text-purple-300 mb-4">
                Node.js, Express, MongoDB, Docker, Arcjet, JWT
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  • Developed a secure and scalable REST API for managing
                  recurring subscriptions with JWT-based authentication and
                  role-based authorization.
                </li>
                <li>
                  • Integrated Arcjet for real-time threat detection and
                  API-level security enhancements.
                </li>
                <li>
                  • Automated email alerts for subscription renewals using
                  Nodemailer, improving user engagement and retention.
                </li>
                <li>
                  • Containerized the application with Docker and published to
                  Docker Hub for streamlined CI/CD and deployment.
                </li>
              </ul>
            </div>

            {/* MongoDB on Kubernetes */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">
                  MongoDB on Kubernetes
                </h3>
              </div>
              <p className="text-sm text-purple-300 mb-4">
                Kubernetes, MongoDB, Mongo Express, Secrets, ConfigMap
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  • Deployed a secure and persistent MongoDB instance on
                  Kubernetes with Secrets for authentication and ClusterIP for
                  internal connectivity.
                </li>
                <li>
                  • Enabled external access via Mongo Express through
                  LoadBalancer service and managed configuration using
                  ConfigMaps.
                </li>
              </ul>
            </div>

            {/* DevOps Solar System App */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">
                  DevOps Solar System App
                </h3>
              </div>
              <p className="text-sm text-purple-300 mb-4">
                Node.js, Docker, Kubernetes, GitHub Actions
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  • Built a CI/CD pipeline using GitHub Actions with stages for
                  testing, code coverage, Docker image build, and deployment to
                  Kubernetes.
                </li>
                <li>
                  • Ensured scalable orchestration with kubectl and introduced
                  quality gates and error handling for robust DevOps workflows.
                </li>
              </ul>
            </div>

            {/* Voltflo Solar Management Platform */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">
                  Voltflo Solar Management Platform
                </h3>
              </div>
              <p className="text-sm text-purple-300 mb-4">React</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  • Developed a multi-role solar management platform with Admin,
                  User, and Installer dashboards.
                </li>
                <li>
                  • Integrated GeoTIFF-based NetZeroTab to visualize optimal
                  rooftop solar panel placement and energy savings.
                </li>
              </ul>
            </div>

            {/* ECS Deployment Demo */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">
                  ECS Deployment Demo
                </h3>
              </div>
              <p className="text-sm text-purple-300 mb-4">
                Node.js, HTML, Docker, Terraform, Amazon ECS
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  • Built a simple Node.js and HTML web application,
                  containerized with Docker and pushed to Docker Hub.
                </li>
                <li>
                  • Provisioned a scalable ECS cluster using Terraform,
                  automating infrastructure deployment for production readiness.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Code className="text-purple-400" size={24} />
                Languages & Web Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["HTML/CSS", "JavaScript", "Node.js", "React"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Cloud className="text-purple-400" size={24} />
                DevOps & Cloud Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Docker",
                  "GitHub Actions",
                  "Kubernetes",
                  "Terraform",
                  "AWS(VPC, ECS, EC2)",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Server className="text-purple-400" size={24} />
                E-commerce Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  Shopify
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:wasay.devv@gmail.com"
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <Mail
                className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={48}
              />
              <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
              <p className="text-gray-300">wasay.devv@gmail.com</p>
            </a>
            <a
              href="tel:0317-8914-956"
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <Phone
                className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={48}
              />
              <h3 className="text-xl font-bold text-white mb-2">Call Me</h3>
              <p className="text-gray-300">0317-8914-956</p>
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://linkedin.com/in/abdul-wasayy46"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/wasaydev-1"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Abdul Wasay. Built with React and passion for clean code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
