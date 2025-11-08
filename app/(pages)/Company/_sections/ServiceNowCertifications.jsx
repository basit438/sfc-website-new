'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { serviceNowCertifications } from '../_data/certificationsData';

export default function ServiceNowCertifications() {
  const [isOpen, setIsOpen] = useState(true); // open by default
  const certifications = serviceNowCertifications;

  return (
    <section
      className="w-[85vw] mx-auto rounded-xl px-6 md:px-12 py-10 md:py-24 text-white"
      style={{
        background: 'linear-gradient(141.04deg, #0E364C 23.79%, #141414 107.43%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-start justify-between cursor-pointer select-none"
        >
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-inter font-[500] text-white mb-2">
              ServiceNow Certifications
            </h2>
            <hr className="border-gray-400 my-3 w-full md:w-3/4" />
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-inter font-[400] ">
              SYSUSA prides itself in our unwavering commitment to excellence and industry-leading standards.
              Our certifications set us apart and demonstrate our dedication to quality, innovation, and
              customer satisfaction.
            </p>
          </div>

          {/* Toggle Icon */}
          <motion.span
            key={isOpen ? 'minus' : 'plus'}
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-light ml-6 flex-shrink-0"
          >
            {isOpen ? '−' : '+'}
          </motion.span>
        </div>

        {/* Accordion Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="relative w-[120px] h-[150px] md:w-[140px] md:h-[170px]">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
