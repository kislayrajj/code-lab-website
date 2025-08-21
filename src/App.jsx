import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <main>
        <Landing />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 mb-6">
                  We are a small but passionate development team of two experts dedicated to creating 
                  exceptional digital experiences. With over 5 years of combined experience, we specialize 
                  in building modern web applications that are both beautiful and functional.
                </p>
                <p className="text-gray-600">
                  Our approach combines technical excellence with creative problem-solving to deliver 
                  solutions that exceed client expectations. We believe in clean code, user-centered design, 
                  and continuous learning to stay at the forefront of technology.
                </p>
              </div>
              
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg text-indigo-600 mb-2">2 Developers</h4>
                  <p className="text-gray-600">Dedicated team members</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg text-indigo-600 mb-2">50+ Projects</h4>
                  <p className="text-gray-600">Successfully delivered</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg text-indigo-600 mb-2">5 Years</h4>
                  <p className="text-gray-600">Combined experience</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg text-indigo-600 mb-2">24/7 Support</h4>
                  <p className="text-gray-600">Always available for clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Web Development</h3>
                <p className="text-gray-600">
                  Custom web applications built with modern technologies like React, Vue, and Node.js 
                  for optimal performance and user experience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
                <p className="text-gray-600">
                  User-centered design solutions that enhance engagement and conversion through 
                  intuitive interfaces and compelling visual experiences.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance & Support</h3>
                <p className="text-gray-600">
                  Ongoing support and maintenance services to keep your digital products running 
                  smoothly with regular updates and security patches.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Project {item}</h3>
                    <p className="text-gray-600 mb-4">
                      A modern web application built with cutting-edge technologies for optimal performance.
                    </p>
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded mr-4 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-indigo-600 rounded"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600">hello@devstudio.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded mr-4 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-indigo-600 rounded"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded mr-4 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-indigo-600 rounded"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                        <p className="text-gray-600">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  
                  <form className="space-y-6">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <textarea 
                        placeholder="Your Message" 
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400 mb-4">DevStudio</div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Creating exceptional digital experiences through innovative web development solutions.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © {new Date().getFullYear()} CodeLab. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
