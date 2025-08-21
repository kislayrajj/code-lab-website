import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Landing = () => {
  const backgroundRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animate background shapes
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(backgroundRef.current, {
      duration: 20,
      x: 20,
      y: -20,
      ease: "power1.inOut"
    }).to(backgroundRef.current, {
      duration: 20,
      x: -20,
      y: 20,
      ease: "power1.inOut"
    });

    // CTA button hover effect with GSAP
    const ctaButton = ctaRef.current;
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          duration: 0.3,
          scale: 1.05,
          boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)',
          ease: "power2.out"
        });
      });

      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          duration: 0.3,
          scale: 1,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          ease: "power2.out"
        });
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  const handleCtaClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={backgroundRef}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
        />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We Build <span className="text-indigo-600">Digital</span> Experiences
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A passionate team of two developers creating modern, responsive web applications 
              with cutting-edge technologies. We transform ideas into exceptional digital products.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                ref={ctaRef}
                onClick={handleCtaClick}
                className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform"
              >
                View Projects
              </button>
              
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
                className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Illustration */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Developer Illustration */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/30 to-purple-500/30 backdrop-blur-sm border border-white/20" />
                <div className="relative z-10 text-center p-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                  <div className="h-4 bg-white/80 rounded mb-2"></div>
                  <div className="h-4 bg-white/60 rounded w-3/4 mx-auto"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-12 h-12 rounded-lg bg-white shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center p-1"
        >
          <motion.div 
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Landing;