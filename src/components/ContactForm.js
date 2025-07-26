"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "me@vupayrs.xyz",
      href: "mailto:me@vupayrs.xyz",
      icon: "✉️"
    },
    {
      label: "Location", 
      value: "Shiraz, Iran",
      href: null,
      icon: (
        <img
          src="/pin.png"
          alt="Location pin"
          className="w-5 h-5 md:w-6 md:h-6 object-contain"
          style={{ display: "inline-block" }}
        />
      )
    }
  ];

  const socialLinks = [
    { 
      name: "Twitter/X", 
      href: "https://x.com/vupayrs", 
      icon:(
        <img
          src="/x.webp"
          alt="x"
          className="w-5 h-5 md:w-6 md:h-6 object-contain"
          style={{ display: "inline-block" }}
        />
      ),
      color: "hover:text-white hover:border-white"
    },
    { 
      name: "TradingView", 
      href: "https://www.tradingview.com/u/Vupayrs/", 
      icon: (
        <img
          src="/tv.webp"
          alt="TradingView"
          className="w-5 h-5 md:w-6 md:h-6 object-contain"
          style={{ display: "inline-block" }}
        />
      ),
      color: "hover:text-blue-400 hover:border-blue-400"
    },
    { 
      name: "Email", 
      href: "mailto:me@vupayrs.xyz", 
      icon: "✉️",
      color: "hover:text-green-400 hover:border-green-400"
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white pt-24 pb-8 px-4 md:px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-6 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight mb-3 md:mb-6"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontWeight: 200,
            }}
          >
            Get In Touch
          </h2>
          <div className="w-12 md:w-20 h-0.5 bg-white mx-auto mb-3 md:mb-6"></div>
          <p 
            className="text-xs md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontWeight: 300,
            }}
          >
            Ready to start a project or just want to chat? I'd love to hear from you. 
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 order-1"
          >
            <h3 
              className="text-base md:text-xl font-light mb-3 md:mb-4"
              style={{
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              }}
            >
              Contact Information
            </h3>

            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center space-x-3 p-3 border border-gray-800 rounded-xl bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-white hover:text-blue-400 transition-colors text-xs md:text-sm break-all"
                      style={{
                        fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p 
                      className="text-white text-xs md:text-sm"
                      style={{
                        fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-2 md:pt-4">
              <h4 className="text-sm md:text-lg font-light mb-3 md:mb-4 text-gray-300">Connect with me</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-3 border border-gray-700 rounded-xl bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300 ${social.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-base md:text-lg mb-1">
                      {social.icon}
                    </span>
                    <span 
                      className="text-xs font-light text-gray-400 text-center"
                      style={{
                        fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      }}
                    >
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              {/* Links as text for better accessibility */}
              <div className="mt-3 md:mt-4 space-y-1 text-xs text-gray-500">
                <p>
                  <span className="text-gray-400">Twitter/X:</span>{" "}
                  <a 
                    href="https://x.com/vupayrs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    @vupayrs
                  </a>
                </p>
                <p>
                  <span className="text-gray-400">TradingView:</span>{" "}
                  <a 
                    href="https://www.tradingview.com/u/Vupayrs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    /u/Vupayrs
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center order-2"
          >
            <div className="p-4 md:p-6 border border-gray-800 rounded-2xl bg-gray-900/20">
              <h3 
                className="text-lg md:text-2xl font-light mb-3 md:mb-4"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                }}
              >
                Let's Work Together
              </h3>
              
              <p 
                className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-xs md:text-sm px-2"
                style={{
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  fontWeight: 300,
                }}
              >
                Whether you need a modern website, trading consultation, or both - 
                I'm here to help bring your vision to life with precision and creativity.
              </p>

              <div className="space-y-3">
                <motion.a
                  href="mailto:me@vupayrs.xyz?subject=Project Inquiry"
                  className="block w-full px-4 md:px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 touch-manipulation"
                  style={{
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a Project
                </motion.a>
                
                <motion.a
                  href="mailto:me@vupayrs.xyz?subject=General Inquiry"
                  className="block w-full px-4 md:px-6 py-3 border border-gray-600 text-white rounded-full text-sm font-medium hover:border-gray-400 hover:bg-gray-900 transition-all duration-300 touch-manipulation"
                  style={{
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Just Say Hi
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-6 md:mt-12 pt-4 md:pt-6 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-gray-500 text-xs"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontWeight: 300,
            }}
          >
            © 2024 Vupayrs. Crafted with precision in Shiraz, Iran.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 