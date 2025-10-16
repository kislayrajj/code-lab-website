import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Monitor, Database, Zap, MousePointer } from 'lucide-react';

const Landing = () => {
  const handleCtaClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-start gap-4 mb-6"
            >
              <div className="p-3 bg-primary/10 rounded-xl">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="p-3 bg-primary/10 rounded-xl">
                <Palette className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Innovation Through <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Code</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A passionate team of two developers creating modern, responsive web applications
              with cutting-edge technologies. We transform ideas into exceptional digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleCtaClick}
                className="group px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={handleContactClick}
                className="px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-xl shadow-md hover:bg-secondary/80 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">14+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
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
              <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 bg-background/90 border-2 border-border/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Code className="w-10 h-10 text-primary" />
                  </div>
                  <div className="h-6 bg-background/80 rounded-lg mb-3"></div>
                  <div className="h-4 bg-background/60 rounded w-3/4 mx-auto"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl flex items-center justify-center overflow-hidden"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <Monitor className="w-8 h-8 text-black relative z-10" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary shadow-2xl flex items-center justify-center overflow-hidden"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.15 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <Database className="w-6 h-6 text-black relative z-10" />
                <motion.div
                  className="absolute inset-0 border-2 border-white/30 rounded-xl"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-6 h-6 bg-primary rounded-full"></div>
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
        <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
        <div className="relative">
          {/* Mouse body */}
          <motion.div
            className="w-8 h-14 bg-muted-foreground/20 rounded-lg border border-muted-foreground/30 flex flex-col items-center justify-center relative overflow-hidden"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Mouse wheel */}
            <div className="w-4 h-6 bg-muted-foreground/10 rounded border border-muted-foreground/20 flex flex-col items-center justify-between py-1">
              <motion.div
                className="w-2 h-0.5 bg-muted-foreground/60 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-2 h-1 bg-muted-foreground/80 rounded-full"
                animate={{ y: [0, 2, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-2 h-0.5 bg-muted-foreground/60 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
          {/* Mouse pointer */}
       
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;