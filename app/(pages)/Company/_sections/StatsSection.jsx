'use client';
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24', label: 'Countries Served' },
    { number: '10+', label: 'Years of Excellence' },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#6C4FE0] to-[#8158E3] py-16 flex justify-center items-center">
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-center p-8 transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-4xl font-inter font-[500] text-white mb-2">{stat.number}</h3>
            <p className="text-lg text-white/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
