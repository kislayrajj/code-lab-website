import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { ThemeProvider } from './components/ThemeProvider';
import { Award, Coffee, Github, Mail, Code, Smartphone, Palette, Cloud, Zap, Shield, ExternalLink, Eye, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import akush_dp from "./assets/images/ankush_ai_headshot.png"
import kislay_dp from "./assets/images/dp_ai.png"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          <Landing />

          {/* About Section */}
          <section id="about" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Kislay Raj Profile */}
                <motion.div
                  className="bg-background rounded-3xl p-8 border-gray-200 shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                    <div className="relative">
                      <img
                        src={kislay_dp}
                        alt="Kislay Raj"
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary/10"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-1">Kislay Raj</h3>
                      <p className="text-primary font-medium">Full-Stack Developer & Co-Founder</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Passionate full-stack developer with 4+ years of experience building scalable web applications.
                    Expert in React, Node.js, and cloud technologies. Loves solving complex problems with elegant solutions.
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">25+ Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">4+ Years</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com"
                      className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Ankush Katoch Profile */}
                <motion.div
                  className="bg-background rounded-3xl p-8 border-gray-200 shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                    <div className="relative">
                      <img
                        src={akush_dp}
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary/10"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-1">Ankush Katoch</h3>
                      <p className="text-primary font-medium">Frontend Developer & Co-Founder </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Creative frontend developer with 3+ years of experience crafting beautiful user experiences.
                    Specializes in UI/UX design and modern frontend technologies. Passionate about pixel-perfect designs.
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">20+ Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">3+ Years</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Framer Motion', 'TypeScript'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com"
                      className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: 'Code',
                    title: 'Web Development',
                    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.',
                    gradient: 'from-blue-500 to-blue-600',
                    features: ['React/Next.js Development', 'API Integration', 'Database Design', 'Performance Optimization']
                  },
                  {
                    icon: 'Smartphone',
                    title: 'Mobile-First Design',
                    description: 'Responsive, PWA development ensuring your application works perfectly across all devices and screen sizes.',
                    gradient: 'from-purple-500 to-purple-600',
                    features: ['Responsive Design', 'Progressive Web Apps', 'Cross-platform Compatibility', 'Touch Interactions']
                  },
                  {
                    icon: 'Palette',
                    title: 'UI/UX Design',
                    description: 'User-centered design solutions that enhance engagement and conversion through intuitive interfaces and compelling visual experiences.',
                    gradient: 'from-pink-500 to-pink-600',
                    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
                  },
                  {
                    icon: 'Cloud',
                    title: 'Cloud Solutions',
                    description: 'Scalable cloud infrastructure and deployment solutions using AWS, Docker, and modern DevOps practices.',
                    gradient: 'from-green-500 to-green-600',
                    features: ['AWS Deployment', 'Docker Containers', 'CI/CD Pipelines', 'Auto Scaling']
                  },
                  {
                    icon: 'Zap',
                    title: 'Performance Optimization',
                    description: 'Core Web Vitals optimization, SEO improvements, and performance monitoring to ensure your site loads fast and ranks high.',
                    gradient: 'from-yellow-500 to-yellow-600',
                    features: ['Core Web Vitals', 'SEO Optimization', 'Image Optimization', 'Caching Strategies']
                  },
                  {
                    icon: 'Shield',
                    title: 'Security & Maintenance',
                    description: 'Ongoing support and maintenance services to keep your digital products running smoothly with regular updates and security patches.',
                    gradient: 'from-red-500 to-red-600',
                    features: ['Security Audits', 'Regular Updates', 'Monitoring', 'Backup Solutions']
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="group bg-background p-8 rounded-3xl border-gray-200 shadow-2xl hover:shadow-theme transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon === 'Code' && <Code className="w-8 h-8 text-white" />}
                      {service.icon === 'Smartphone' && <Smartphone className="w-8 h-8 text-white" />}
                      {service.icon === 'Palette' && <Palette className="w-8 h-8 text-white" />}
                      {service.icon === 'Cloud' && <Cloud className="w-8 h-8 text-white" />}
                      {service.icon === 'Zap' && <Zap className="w-8 h-8 text-white" />}
                      {service.icon === 'Shield' && <Shield className="w-8 h-8 text-white" />}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div
                className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center border-gray-200 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your vision and create something amazing together. We offer free consultations
                  to understand your needs and provide the best solution.
                </p>
                <motion.button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Projects</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </motion.div>

              {/* Featured Projects */}
              <div className="mb-16">
                <motion.h3
                  className="text-2xl font-bold text-foreground text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Featured Work
                </motion.h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {[
                    {
                      title: 'E-Commerce Platform',
                      description: 'A modern e-commerce solution with React, Next.js, Stripe integration, and PostgreSQL database.',
                      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                      tags: ['React', 'Next.js', 'Stripe', 'PostgreSQL'],
                      liveUrl: '#',
                      githubUrl: '#',
                      projectId: 'e-commerce-platform'
                    },
                    {
                      title: 'Task Management App',
                      description: 'A collaborative task management application with real-time updates, team collaboration, and advanced filtering.',
                      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
                      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
                      liveUrl: '#',
                      githubUrl: '#',
                      projectId: 'task-management-app'
                    }
                  ].map((project, index) => (
                    <motion.div
                      key={project.title}
                      className="group bg-background rounded-3xl overflow-hidden border-gray-200 shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.a
                            href={project.liveUrl}
                            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground rounded-lg text-sm font-medium hover:bg-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground rounded-lg text-sm font-medium hover:bg-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </motion.a>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* More Projects */}
              <div>
                <motion.h3
                  className="text-2xl font-bold text-foreground text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  More Projects
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Healthcare Dashboard',
                      description: 'A comprehensive dashboard for healthcare providers with patient management and analytics.',
                      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
                      tags: ['React', 'D3.js', 'Express', 'MySQL'],
                      projectId: 'healthcare-dashboard'
                    },
                    {
                      title: 'Real Estate Platform',
                      description: 'Property listing and management platform with advanced search and filtering capabilities.',
                      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
                      tags: ['Next.js', 'TypeScript', 'Prisma', 'AWS'],
                      projectId: 'real-estate-platform'
                    },
                    {
                      title: 'Learning Management System',
                      description: 'Online learning platform with video streaming, quizzes, and progress tracking.',
                      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop',
                      tags: ['React', 'Firebase', 'Tailwind', 'Video.js'],
                      projectId: 'learning-management-system'
                    },
                    {
                      title: 'Restaurant Booking System',
                      description: 'Table reservation system with real-time availability and payment processing.',
                      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
                      tags: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
                      projectId: 'restaurant-booking-system'
                    }
                  ].map((project, index) => (
                    <motion.div
                      key={project.title}
                      className="group bg-background rounded-2xl overflow-hidden border-gray-200 shadow-2xl hover:shadow-theme transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                        <motion.button
                          onClick={() => window.location.href = `/project/${project.projectId}`}
                          className="flex items-center gap-2 text-primary font-medium text-sm hover:text-primary/80 transition-colors group/btn"
                          whileHover={{ x: 4 }}
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                          <motion.div
                            className="group-hover/btn:translate-x-1 transition-transform"
                          >
                            →
                          </motion.div>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  {/* Contact Form */}
                  <motion.div
                    className="bg-background rounded-3xl border-gray-200 shadow-2xl p-8 md:p-12"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send us a message</h3>
                    <p className="text-muted-foreground mb-8">
                      Ready to bring your ideas to life? We'd love to hear about your project and discuss how we can help.
                    </p>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                          <input
                            type="text"
                            placeholder="John"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                          <input
                            type="text"
                            placeholder="Doe"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company (Optional)</label>
                        <input
                          type="text"
                          placeholder="Your Company"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                        <input
                          type="text"
                          placeholder="Project Discussion"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                        <textarea
                          placeholder="Tell us about your project..."
                          rows="5"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-colors resize-none"
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                        <Mail className="w-5 h-5" />
                      </motion.button>
                    </form>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Contact Information</h3>
                      <p className="text-muted-foreground mb-8">
                        Get in touch with us through any of these channels. We're here to help bring your vision to life.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <motion.div
                        className="flex items-start gap-4 p-6 bg-secondary/50 rounded-2xl border border-gray-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">Email</h4>
                          <p className="text-muted-foreground">hello@codelab.dev</p>
                          <p className="text-sm text-muted-foreground mt-1">We respond within 2-4 hours</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-start gap-4 p-6 bg-secondary/50 rounded-2xl border border-gray-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">Phone</h4>
                          <p className="text-muted-foreground">+91 98765 43210</p>
                          <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-start gap-4 p-6 bg-secondary/50 rounded-2xl border border-gray-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">Location</h4>
                          <p className="text-muted-foreground">CodeLab Studios</p>
                          <p className="text-muted-foreground">Tech Hub, India</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Response Time Card */}
                    <motion.div
                      className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">Quick Response</h4>
                          <p className="text-muted-foreground text-sm">We typically respond within 2-4 hours during business hours</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-muted/50 border-t border-border/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary rounded-lg">
                    <Code className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-bold text-primary">CodeLab</span>
                </div>
                <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                  Creating exceptional digital experiences through innovative web development solutions.
                  We transform ideas into reality with cutting-edge technologies and creative problem-solving.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    className="p-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    className="p-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Home', id: 'home' },
                    { name: 'About', id: 'about' },
                    { name: 'Services', id: 'services' },
                    { name: 'Projects', id: 'projects' },
                    { name: 'Contact', id: 'contact' }
                  ].map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => {
                          const element = document.getElementById(link.id);
                          if (element) {
                            window.scrollTo({
                              top: element.offsetTop - 80,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-6">Services</h3>
                <ul className="space-y-3">
                  {[
                    'Web Development',
                    'Mobile-First Design',
                    'UI/UX Design',
                    'Cloud Solutions',
                    'Performance Optimization',
                    'Security & Maintenance'
                  ].map((service) => (
                    <li key={service}>
                      <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-border/10 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} CodeLab. All rights reserved.
                </p>

                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to top
                  <motion.div
                    className="group-hover:-translate-y-1 transition-transform"
                  >
                    ↑
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
