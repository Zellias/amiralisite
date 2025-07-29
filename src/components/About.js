"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "Web Development", percentage: 60, color: "#3b82f6" },
    { name: "Crypto Trading", percentage: 70, color: "#10b981" },
    { name: "Forex Trading", percentage: 70, color: "#f59e0b" },
  ];

  const services = [
    {
      title: "Trading",
      description: "Trade crypto & forex market at professional level.",
      icon: (
        <img
          src="/tv.webp"
          alt="TradingView"
          className="w-5 h-5 md:w-6 md:h-6 object-contain"
          style={{ display: "inline-block" }}
        />
      )
    },
    {
      title: "Web Development", 
      description: "High-quality development of sites.",
      icon: (
        <img
          src="/laptop.png"
          alt="Laptop"
          className="w-5 h-5 md:w-6 md:h-6 object-contain"
          style={{ display: "inline-block" }}
        />
      )
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white pt-24 pb-8 px-2 sm:px-4 md:px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
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
            About
          </h2>
          <div className="w-12 md:w-20 h-0.5 bg-white mx-auto"></div>
        </motion.div>

        {/* Responsive: stack on mobile, grid on large screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="order-1 w-full"
          >
            <h3 
              className="text-lg md:text-2xl font-light mb-3 md:mb-6 text-gray-200"
              style={{
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              }}
            >
              About me
            </h3>
            
            <div className="space-y-3 md:space-y-4 text-gray-400 leading-relaxed text-sm md:text-sm">
              <p
                style={{
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  fontWeight: 300,
                }}
              >
                I'm <span className="text-white font-medium">AmeeAli</span> – a multi-skilled trader and analyst with expertise in crypto, forex, and stock portfolios. I use a mix of technical and macro analysis to spot high-probability trades and manage risk effectively.
              </p>
              <p
                style={{
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  fontWeight: 300,
                }}
              >
                Beyond the markets, I work as a community manager, building strong, engaged trader communities. I'm also passionate about iGaming and closely follow trends in Web3, GameFi, and the metaverse.
              </p>
              <p
                style={{
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  fontWeight: 300,
                }}
              >
                With a sharp eye for market movements and a love for innovation, I thrive at the intersection of finance and tech. Always learning, always growing — and always ready to connect.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-4 md:mt-6 p-3 md:p-4 border border-gray-800 rounded-xl bg-gray-900/20">
              <h4 className="text-sm md:text-lg font-medium mb-2 md:mb-3 text-white">Contact me</h4>
              <div className="space-y-1 md:space-y-2">
                <a 
                  href="mailto:me@vupayrs.xyz"
                  className="block text-blue-400 hover:text-blue-300 transition-colors text-xs md:text-sm"
                  style={{
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  }}
                >
                  me@vupayrs.xyz
                </a>
                <p className="text-gray-400 text-xs flex items-center">
                  <img
                    src="/pin.png"
                    alt="Location pin"
                    className="inline-block w-4 h-4 mr-1 align-text-bottom"
                  />
                  Shiraz, Iran
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills & Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-2 w-full"
          >
            {/* What I'm Doing */}
            <div>
              <h3 
                className="text-lg md:text-2xl font-light mb-3 md:mb-6 text-gray-200"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                }}
              >
                What I'm doing
              </h3>
              
              <div className="flex flex-col gap-3 md:gap-4">
                <motion.div
                  className="p-3 md:p-4 border border-gray-800 rounded-xl bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">💹</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm md:text-lg font-medium text-white mb-1">
                        Crypto &amp; Forex Trader
                      </h4>
                      <p
                        className="text-gray-400 text-xs md:text-sm"
                        style={{
                          fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        Active in the crypto and forex markets, leveraging technical and fundamental analysis to identify profitable opportunities and manage risk.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="p-3 md:p-4 border border-gray-800 rounded-xl bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">📈</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm md:text-lg font-medium text-white mb-1">
                        Stock Analyst
                      </h4>
                      <p
                        className="text-gray-400 text-xs md:text-sm"
                        style={{
                          fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        Conducting in-depth research and analysis of stocks to provide actionable insights and support investment decisions.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="p-3 md:p-4 border border-gray-800 rounded-xl bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">👥</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm md:text-lg font-medium text-white mb-1">
                        Community Manager
                      </h4>
                      <p
                        className="text-gray-400 text-xs md:text-sm"
                        style={{
                          fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        Building and nurturing online communities, fostering engagement, and ensuring a positive and informative environment.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="p-3 md:p-4 border border-gray-800 rounded-xl bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">🎰</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm md:text-lg font-medium text-white mb-1">
                        iGaming Enthusiast
                      </h4>
                      <p
                        className="text-gray-400 text-xs md:text-sm"
                        style={{
                          fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        Passionate about the iGaming industry, exploring trends, platforms, and the intersection of gaming and technology.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

        
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 