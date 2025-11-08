'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'OUR MISSION' },
    { id: 'expertise', label: 'OUR EXPERTISE' },
    { id: 'approach', label: 'OUR APPROACH' },
  ];

  const content = {
    mission: {
      title: 'Empowering Businesses Through Innovative Technology Solutions',
      text: (
        <div className="space-y-4">
          <p>
            At <span className="font-semibold text-purple-600">SFC (Society for Code)</span>, we believe in the transformative power of technology. Founded on the principles of innovation, excellence, and client success, we are committed to delivering cutting-edge software solutions that drive real business impact.
          </p>
          <p>
            Our team of passionate developers, designers, and technology experts work tirelessly to turn complex challenges into elegant, user-friendly solutions. We pride ourselves on our ability to understand your unique needs and deliver tailored solutions that exceed expectations.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
            <p className="text-purple-800 font-medium">
              "Transforming ideas into digital reality with creativity, precision, and technical excellence."
            </p>
          </div>
        </div>
      ),
    },
    expertise: {
      title: 'Comprehensive Digital Solutions for Modern Businesses',
      text: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg text-purple-700 mb-2">Web Development</h4>
              <p className="text-gray-600">Custom, responsive websites and web applications built with the latest technologies.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg text-purple-700 mb-2">Mobile Apps</h4>
              <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg text-purple-700 mb-2">UI/UX Design</h4>
              <p className="text-gray-600">Beautiful, intuitive interfaces that enhance user experience and engagement.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg text-purple-700 mb-2">AI/ML Solutions</h4>
              <p className="text-gray-600">Intelligent systems that learn, adapt, and deliver actionable insights.</p>
            </div>
          </div>
        </div>
      ),
    },
    approach: {
      title: 'Our Client-Centric Development Process',
      text: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Discovery & Planning</h4>
                <p className="text-gray-600">We begin by understanding your business goals, target audience, and project requirements in depth.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Design & Prototyping</h4>
                <p className="text-gray-600">Our designers create wireframes and prototypes to visualize the final product.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Development & Testing</h4>
                <p className="text-gray-600">Agile development process with regular testing and quality assurance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Deployment & Support</h4>
                <p className="text-gray-600">Smooth deployment followed by ongoing support and maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      {/* Inner Box */}
      <div className="relative w-full max-w-7xl mx-auto bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-lg -mt-4 md:-mt-8 lg:-mt-16 border border-purple-50">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-12 border-b border-gray-100 pb-2">
          {tabs.map((tab) => (
            <div key={tab.id} className="flex flex-col items-start">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`font-semibold text-sm sm:text-base md:text-lg mb-3 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-purple-700 scale-105'
                    : 'text-gray-600 hover:text-purple-600 hover:scale-[1.02]'
                }`}
              >
                {tab.label}
              </button>
              <div
                className={`h-1 w-full rounded-full transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-gradient-to-r from-purple-500 to-purple-700' : 'bg-transparent'
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {content[activeTab].title}
            </h2>
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
              {content[activeTab].text}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white border-none">
                Our Services
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/20 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20 p-8">
              <div className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Innovation at Its Core</h3>
                <p className="text-gray-600">Driving digital transformation with cutting-edge technology solutions</p>
              </div>
            </div>
            <Image
              src="/about-image.jpg"
              alt="SFC Team"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
