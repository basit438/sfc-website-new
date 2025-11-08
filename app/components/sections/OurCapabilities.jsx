import React from 'react';
import { Code, Smartphone, Layout, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications built with modern technologies like React, Next.js, and Node.js. We create fast, secure, and scalable web solutions that drive business growth.',
    icon: <Code className="w-8 h-8 text-purple-600" />,
    color: 'bg-purple-50',
    border: 'border-purple-100',
    hover: 'hover:shadow-purple-100'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance mobile apps that engage users and deliver exceptional experiences.',
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
    color: 'bg-purple-50',
    border: 'border-purple-100',
    hover: 'hover:shadow-purple-100'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and engagement. Our design process focuses on usability, accessibility, and creating meaningful interactions.',
    icon: <Layout className="w-8 h-8 text-purple-600" />,
    color: 'bg-purple-50',
    border: 'border-purple-100',
    hover: 'hover:shadow-purple-100'
  },
  {
    title: 'AI/ML Solutions',
    description: 'Intelligent systems that learn, adapt, and deliver actionable insights. We leverage artificial intelligence and machine learning to solve complex business challenges.',
    icon: <Cpu className="w-8 h-8 text-purple-600" />,
    color: 'bg-purple-50',
    border: 'border-purple-100',
    hover: 'hover:shadow-purple-100'
  }
];

const Capabilities = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-syne">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver innovative technology solutions that help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl bg-white border ${service.border} transition-all duration-300 hover:shadow-xl ${service.hover}`}
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to start your project?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Get a Free Consultation
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-50 font-medium rounded-lg border border-gray-200 transition-colors duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;