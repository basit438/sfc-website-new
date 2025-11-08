'use client';
import React from 'react';
import Image from 'next/image';

export default function CommunityImpact() {
  const impactPoints = [
    {
      title: "Our Ethos",
      description: "Making a positive impact is part of SYSUSA's technical DNA."
    },
    {
      title: "Purpose in Action",
      description: "We leverage our expertise to drive community change."
    },
    {
      title: "Giving with Heart",
      description: "Giving back is not just our responsibility, it's our privilege."
    },
    {
      title: "Collective Impact",
      description: "Through volunteering and partnerships, we drive change."
    }
  ];

  return (
    <section className="min-h-[80vh] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Grid with 3 columns: 2 for content, 1 for image */}
          <div className="grid lg:grid-cols-3 gap-8 p-8 md:p-12 lg:p-16 items-center">
            
            {/* Left Content (2 cols) */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <p className="text-indigo-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Community Impact
              </p>

              <h1 className="text-4xl md:text-5xl font-Syne font-[500] text-gray-900 mb-6 leading-tight">
                Giving back to our communities
              </h1>

              <p className="text-lg font-inter font-[400] text-gray-600 mb-10 max-w-3xl">
                We believe in the power of community and are committed to making a positive impact through various initiatives:
              </p>

              {/* Inline Title + Description */}
              <div className="space-y-4">
                {impactPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 text-gray-800"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Image 
                        src="/icons/checkicon.svg" 
                        alt="Checkmark" 
                        width={20} 
                        height={20} 
                      />
                    </div>
                    <p className="text-base font-inter font-[500] leading-relaxed">
                      <span className="font-semibold text-gray-900">{point.title}:</span>{" "}
                      <span className="font-[400] text-gray-700">{point.description}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image (1 col) */}
            <div className="relative lg:col-span-1 flex justify-center">
              <div className="relative rounded-xl overflow-hidden w-[95%] h-[400px]">
                <Image
                  src="/aboutimages/communityimage.jpg"
                  alt="Community members working together on a gardening project"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
