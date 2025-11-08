import React from 'react';
import Image from 'next/image';
import { coreValuesData } from '../_data/coreValuesData';

const CoreValues = () => {
  const { header, values } = coreValuesData;

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-3">
            {header.title}
          </p>
          <h2 className="text-4xl font-[500] font-Syne leading-[1.15] text-gray-900 mb-4">
            {header.heading}
          </h2>
          <p className="text-gray-600 font-inter font-[400] text-lg max-w-2xl">
            {header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
 <Image 
                  src={value.icon} 
                  alt={`${value.title} icon`} 
                  width={40} 
                  height={40}
                //   className="brightness-0 invert"
                />

              </div>
               
              
              <h3 className="text-xl font-inter font-[500] text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 font-inter font-[400] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;