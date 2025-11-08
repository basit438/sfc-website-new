'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { technicalCertifications } from '../_data/certificationsData';

export default function TechnicalCertifications() {
  // Accordion open by default
  const [isOpen, setIsOpen] = useState(true);
  const certifications = technicalCertifications;

  return (
    <section className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12 mt-8 mb-12">
      {/* Header Section */}
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl sm:text-3xl font-inter font-[500] text-[#0F172A]">
          Technical Certifications
        </h2>

        <motion.span
          key={isOpen ? 'minus' : 'plus'}
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-3xl font-semibold text-gray-500"
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 mt-4 text-[16px] font-inter font-[400] leading-7 max-w-3xl">
        Society4Code.com prides itself in our unwavering commitment to excellence and industry-leading standards.
        Our certifications set us apart and demonstrate our dedication to quality, innovation,
        and customer satisfaction.
      </p>

      {/* Accordion Body */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} Certified`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[#0F172A] mt-2 font-semibold text-sm">{cert.title}</p>
                  <span className="text-gray-500 text-xs">Certified</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
