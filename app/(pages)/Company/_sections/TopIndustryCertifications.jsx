'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { topIndustryCertifications } from '../_data/certificationsData';

export default function TopIndustryCertifications() {
  const { header, certifications } = topIndustryCertifications;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-18 md:px-16 lg:px-28 py-20 bg-[#F7F8FA] font-[Inter]">
      {/* Header Section - Heading and paragraph in one row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <p className="text-[#7859D4] font-inter font-[600] tracking-wide uppercase mb-2">
            Following Standards
          </p>
          <h2 className="text-3xl md:text-4xl font-syne font-[600] text-[#0A0A2A]">
            Top Industry <br className="lg:hidden" /> Certifications
          </h2>
        </div>
        <p className="text-[#1A1A1A]/80 text-[18px] leading-[35px] pt-4 max-w-2xl font-inter font-[400]">
          Society4Code.com is proud to announce its ISO and CMMI certifications, reflecting our commitment
          to industry-leading standards, quality management, and continuous process improvement.
        </p>
      </div>

      {/* Tab Navigation + Content */}
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
        {/* Tabs */}
        <div className="flex flex-wrap gap-6 border-b border-gray-200 pb-4">
          {certifications.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`pb-2 text-[16px] font-medium font-inter transition-all ${
                activeIndex === index
                  ? 'text-[#7859D4] border-b-2 border-[#7859D4]'
                  : 'text-gray-500 hover:text-[#7859D4]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mt-10"
          >
            {/* Text Section */}
            <div className="flex-1 max-w-[700px]">
              <h3 className="text-[22px] font-semibold text-[#0A0A2A] mb-4">
                {certifications[activeIndex].title}
              </h3>
              <p className="text-[#1A1A1A]/80 text-[16px] leading-[30px] font-inter font-[400]">
                {certifications[activeIndex].description}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center md:justify-end w-full md:w-[280px]">
              <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px]">
                <Image
                  src={certifications[activeIndex].image}
                  alt={certifications[activeIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
