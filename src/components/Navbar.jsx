import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Menu, X, Palette } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { theme, changeTheme, themes } = useTheme();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    setActiveSection(id);

    // If we're on a project detail page, navigate to home first
    if (window.location.pathname.startsWith('/project/')) {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="p-2 bg-primary rounded-lg">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">CodeLab</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Theme Switcher */}
            <div className="relative">
              <motion.button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Palette className="w-5 h-5 text-foreground" />
              </motion.button>

              <AnimatePresence>
                {isThemeMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-background rounded-xl shadow-lg border border-border/10 py-2 z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {themes.map((themeOption) => (
                      <button
                        key={themeOption.value}
                        onClick={() => {
                          changeTheme(themeOption.value);
                          setIsThemeMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors flex items-center gap-3 ${
                          theme === themeOption.value ? 'text-primary bg-secondary/50' : 'text-foreground'
                        }`}
                      >
                        <span className="text-lg">{themeOption.icon}</span>
                        {themeOption.name}
                        {theme === themeOption.value && (
                          <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-background z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 pt-24 flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-2xl font-medium py-2 px-4 ${
                    activeSection === link.id
                      ? 'text-primary'
                      : 'text-foreground/70'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Mobile Theme Switcher */}
              <div className="flex flex-col items-center space-y-4 mt-8">
                <span className="text-lg font-medium text-foreground">Choose Theme</span>
                <div className="flex gap-4">
                  {themes.map((themeOption) => (
                    <motion.button
                      key={themeOption.value}
                      onClick={() => {
                        changeTheme(themeOption.value);
                        setIsMenuOpen(false);
                      }}
                      className={`p-3 rounded-xl transition-colors ${
                        theme === themeOption.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-foreground hover:bg-secondary/80'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">{themeOption.icon}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;