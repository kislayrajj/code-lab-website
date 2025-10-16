import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Star } from 'lucide-react';
import Navbar from './Navbar';

const ProjectDetail = () => {
  const { projectId } = useParams();

  // Project data - in a real app, this would come from an API or database
  const projects = {
    'e-commerce-platform': {
      id: 'e-commerce-platform',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with React, Next.js, Stripe integration, and PostgreSQL database. Features include user authentication, product catalog, shopping cart, payment processing, and order management.',
      longDescription: 'This comprehensive e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The application includes advanced features like real-time inventory management, order tracking, customer reviews, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      technologies: ['React', 'Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'User authentication and authorization',
        'Product catalog with advanced filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Order management and tracking',
        'Admin dashboard with analytics',
        'Responsive design for all devices',
        'Real-time inventory management'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Optimizing database queries for performance',
        'Creating an intuitive admin interface',
        'Ensuring responsive design across devices'
      ],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/example/ecommerce',
      duration: '3 months',
      teamSize: '2 developers',
      status: 'Completed',
      screenshots: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop'
      ]
    },
    'task-management-app': {
      id: 'task-management-app',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and advanced filtering. Built with React, Node.js, Socket.io, and MongoDB.',
      longDescription: 'This powerful task management application enables teams to collaborate effectively with real-time updates, advanced filtering options, and comprehensive project tracking. The app includes features like drag-and-drop task organization, time tracking, and detailed reporting.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      features: [
        'Real-time collaboration with Socket.io',
        'Drag-and-drop task organization',
        'Advanced filtering and search',
        'Team management and permissions',
        'Time tracking and reporting',
        'File attachments and comments',
        'Email notifications',
        'Mobile-responsive design'
      ],
      challenges: [
        'Implementing real-time synchronization',
        'Designing an intuitive drag-and-drop interface',
        'Managing complex permission systems',
        'Optimizing performance for large teams'
      ],
      liveUrl: 'https://example-tasks.com',
      githubUrl: 'https://github.com/example/tasks',
      duration: '4 months',
      teamSize: '3 developers',
      status: 'Completed',
      screenshots: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
      ]
    },
    'healthcare-dashboard': {
      id: 'healthcare-dashboard',
      title: 'Healthcare Dashboard',
      description: 'A comprehensive dashboard for healthcare providers with patient management and analytics. Built with React, D3.js, Express, and MySQL.',
      longDescription: 'This healthcare management dashboard provides medical professionals with powerful tools for patient management, appointment scheduling, and data analytics. The system includes secure patient records, appointment management, and comprehensive reporting features.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
      technologies: ['React', 'D3.js', 'Express', 'MySQL', 'Chart.js', 'Material-UI'],
      features: [
        'Patient management system',
        'Appointment scheduling and reminders',
        'Medical records and history',
        'Data visualization with D3.js',
        'Analytics and reporting dashboard',
        'HIPAA-compliant security',
        'Multi-user role management',
        'Integration with medical devices'
      ],
      challenges: [
        'Ensuring HIPAA compliance',
        'Creating intuitive data visualizations',
        'Managing complex medical data structures',
        'Implementing secure authentication'
      ],
      liveUrl: 'https://example-healthcare.com',
      githubUrl: 'https://github.com/example/healthcare',
      duration: '6 months',
      teamSize: '4 developers',
      status: 'Completed',
      screenshots: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
      ]
    },
    'real-estate-platform': {
      id: 'real-estate-platform',
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with advanced search and filtering capabilities. Built with Next.js, TypeScript, Prisma, and AWS.',
      longDescription: 'This comprehensive real estate platform connects property owners with potential buyers and renters. The application features advanced search filters, virtual tours, mortgage calculators, and comprehensive property management tools.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'AWS', 'PostgreSQL', 'Stripe'],
      features: [
        'Advanced property search and filtering',
        'Virtual property tours',
        'Mortgage calculator integration',
        'Property listing management',
        'Real-time market analytics',
        'Agent management system',
        'Secure payment processing',
        'Mobile-optimized interface'
      ],
      challenges: [
        'Implementing complex search algorithms',
        'Managing large property databases',
        'Integrating with third-party APIs',
        'Ensuring fast loading times for images'
      ],
      liveUrl: 'https://example-realestate.com',
      githubUrl: 'https://github.com/example/realestate',
      duration: '5 months',
      teamSize: '3 developers',
      status: 'Completed',
      screenshots: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1560518204-2b1b1b1b1b1?w=600&h=400&fit=crop'
      ]
    },
    'learning-management-system': {
      id: 'learning-management-system',
      title: 'Learning Management System',
      description: 'Online learning platform with video streaming, quizzes, and progress tracking. Built with React, Firebase, Tailwind, and Video.js.',
      longDescription: 'This comprehensive learning management system provides educators and students with powerful tools for online education. Features include video streaming, interactive quizzes, progress tracking, and comprehensive course management.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Video.js', 'Chart.js', 'Stripe'],
      features: [
        'Video streaming and playback',
        'Interactive quizzes and assessments',
        'Progress tracking and certificates',
        'Course management for instructors',
        'Discussion forums and messaging',
        'Payment processing for courses',
        'Mobile-responsive design',
        'Analytics dashboard'
      ],
      challenges: [
        'Optimizing video streaming performance',
        'Creating engaging quiz interfaces',
        'Managing complex course structures',
        'Ensuring accessibility compliance'
      ],
      liveUrl: 'https://example-learning.com',
      githubUrl: 'https://github.com/example/learning',
      duration: '4 months',
      teamSize: '2 developers',
      status: 'Completed',
      screenshots: [
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop'
      ]
    },
    'restaurant-booking-system': {
      id: 'restaurant-booking-system',
      title: 'Restaurant Booking System',
      description: 'Table reservation system with real-time availability and payment processing. Built with Vue.js, Laravel, MySQL, and Stripe.',
      longDescription: 'This restaurant booking system streamlines the reservation process for both customers and restaurant staff. Features include real-time table availability, online payments, waitlist management, and comprehensive restaurant management tools.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe', 'Tailwind CSS', 'Pusher'],
      features: [
        'Real-time table availability',
        'Online reservation system',
        'Waitlist management',
        'Payment processing integration',
        'Restaurant management dashboard',
        'Customer notification system',
        'Table layout visualization',
        'Reporting and analytics'
      ],
      challenges: [
        'Managing real-time availability',
        'Creating intuitive table layouts',
        'Handling reservation conflicts',
        'Integrating with existing POS systems'
      ],
      liveUrl: 'https://example-restaurant.com',
      githubUrl: 'https://github.com/example/restaurant',
      duration: '3 months',
      teamSize: '2 developers',
      status: 'Completed',
      screenshots: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop'
      ]
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <button onClick={() => window.location.href = '/'} className="text-primary hover:text-primary/80">← Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </button>

            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{project.teamSize}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{project.status}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-xl shadow-md hover:bg-secondary/80 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View Source Code
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden border-gray-200 shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
              </motion.div>

              {/* Detailed Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background rounded-3xl p-8 border-gray-200 shadow-2xl"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{project.longDescription}</p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-background rounded-3xl p-8 border-gray-200 shadow-2xl"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-background rounded-3xl p-8 border-gray-200 shadow-2xl"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Technical Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Code className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-background rounded-3xl p-8 border-gray-200 shadow-2xl"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      className="rounded-xl overflow-hidden border border-gray-200 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background rounded-3xl p-6 border-gray-200 shadow-2xl"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-background rounded-3xl p-6 border-gray-200 shadow-2xl"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Project Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium text-foreground">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size</span>
                    <span className="font-medium text-foreground">{project.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium text-green-600">{project.status}</span>
                  </div>
                </div>
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-background rounded-3xl p-6 border-gray-200 shadow-2xl"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;