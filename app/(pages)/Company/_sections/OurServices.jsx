import React from 'react';
import { FaLaptopCode, FaBrain, FaPalette, FaMobileAlt, FaCogs } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from web applications to enterprise systems.',
  },
  {
    icon: <FaBrain size={40} />,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage the power of AI and machine learning to drive business growth and innovation.',
  },
  {
    icon: <FaPalette size={40} />,
    title: 'Graphic Design',
    description: 'Creative and professional graphic design services to help you build a strong brand identity.',
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Web & App Development',
    description: 'Modern, responsive, and user-friendly websites and mobile applications for businesses of all sizes.',
  },
  {
    icon: <FaCogs size={40} />,
    title: 'Technology Consulting',
    description: 'Expert advice and guidance to help you make the right technology decisions for your business.',
  },
];

const OurServices = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4 text-primary">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
