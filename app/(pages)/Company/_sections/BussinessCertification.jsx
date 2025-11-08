'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { businessCertifications } from '../_data/certificationsData';

export default function BusinessCertification() {
  const certifications = businessCertifications;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-16 lg:px-28 py-20 bg-[#F9FAFB] font-[Inter]">
      {/* Header */}
     <div className="max-w-7xl mx-auto mb-12 ">
         <h2 className="text-4xl font-syne font-[500] text-[#0A0A2A] mb-6">
        Contract Vehicles
      </h2>

      {/* Intro paragraph */}
      <p className="max-w-4xl text-[#1A1A1A]/80 text-[18px] leading-[35px] font-inter font-[400] mb-16">
        Society4Code.com is at the forefront of leading changes and enabling IT modernization across industries
        in the Public and the Private Sectors. Our team has created game-changing solutions that have
        enabled business transformation into high-performing, efficient, and resilient enterprises.
      </p>
     </div>

      {/* Content container */}
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left side */}
        <div className="flex-1">
          <h3 className="text-[22px] md:text-[24px] font-semibold text-[#0A0A2A] mb-4 font-inter font-[500]">
            Business Certification
          </h3>
          <p className="text-[#1A1A1A]/80 text-[18px] leading-[35px] font-normal mb-6 font-inter font-[400]">
            Society4Code.com prides itself in our unwavering commitment to excellence and industry-leading
            standards. Our certifications set us apart and demonstrate our dedication to quality,
            innovation, and customer satisfaction.
          </p>
        </div>

        {/* Right side (Accordion) */}
        <div className="flex-1">
          {certifications.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              {/* Accordion header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left font-medium text-[#0A0A2A] focus:outline-none"
              >
                <span className="font-inter font-[500]">{item.title}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 0 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl leading-none text-gray-600"
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </button>

              {/* Accordion content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 flex flex-col sm:flex-row gap-8 sm:items-start">
                      {/* Text Content */}
                      <div className="flex-1">
                        <p className="text-[#1A1A1A]/80 text-[16px] leading-[30px] font-inter font-[400] font-normal">
                          {item.content}
                        </p>
                      </div>

                      {/* Image */}
                      {item.image && (
                        <div className="w-[180px] h-[180px] flex-shrink-0 flex justify-center items-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={180}
                            height={180}
                            className="object-contain rounded-md"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
