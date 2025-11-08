'use client';
import React from 'react';
import Header from '../layout/Header';
import Button from '../ui/Button';
import Image from 'next/image';

function Hero() {
  return (
    <div className="relative">
      <Header />

      <section className="relative h-screen flex flex-col overflow-hidden">
        {/* === Background Gradient === */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #4c1d95 40%, #6d28d9 70%, #8b5cf6 100%)',
            opacity: 0.98
          }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] -z-10"></div>

        {/* === Main Content === */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-6 sm:pb-10 md:pb-12 lg:pb-14 flex flex-col justify-between h-full">

            {/* === Text + CTA === */}
            <div className="max-w-4xl flex-shrink-0">
              <h1 className="text-white font-[600] font-Syne leading-[1.1] sm:leading-[1.15] text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                Empowering Businesses with <span className="text-accent">Digital Excellence</span>
              </h1>

              <p className="text-white/90 text-[1rem] sm:text-[1.1rem] md:text-[1.15rem] lg:text-[1.25rem] leading-[1.6] sm:leading-[1.7] font-[400] font-inter mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl">
                At SFC (Society for Code), we deliver cutting-edge web, mobile, and AI/ML solutions with stunning UI/UX design. 
                Let's transform your ideas into reality with our expert software services.
              </p>

              <div>
                <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white border-none">
                  Get Started
                </Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  View Our Work
                </Button>
              </div>
              </div>
            </div>

            {/* === Logos + Stats Row (Bottom) === */}
            <div className="w-full mt-auto pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-8 sm:pb-6 md:pb-8 lg:pb-10 flex-shrink-0">
              {/* Mobile: Stacked Layout */}
              <div className="lg:hidden flex flex-col gap-6 sm:gap-8 pb-4">
                {/* Stats First on Mobile */}
                <div className="flex flex-row items-center justify-around gap-6 sm:gap-8 pb-2">
                  {/* Stat 1 */}
                  <div className="flex flex-col items-center">
                    <span className="font-inter text-white text-[2.5rem] sm:text-[3rem] font-[500] leading-[1] mb-1">
                      100+
                    </span>
                    <span className="text-white/80 text-[0.75rem] sm:text-[0.8rem] font-[400] font-inter uppercase tracking-wide text-center">
                      Projects<br />Delivered
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col items-center">
                    <span className="font-inter text-white text-[2.5rem] sm:text-[3rem] font-[500] leading-[1] mb-1">
                      5+
                    </span>
                    <span className="text-white/80 text-[0.75rem] sm:text-[0.8rem] font-[400] font-inter uppercase tracking-wide text-center">
                      Years of<br />Experience
                    </span>
                  </div>
                </div>

                {/* Logos Below on Mobile */}
                <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 pb-4 sm:pb-6">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <span className="text-white font-bold text-xl">Web</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <span className="text-white font-bold text-xl">Mobile</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <span className="text-white font-bold text-xl">UI/UX</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <span className="text-white font-bold text-xl">AI/ML</span>
                  </div>
                </div>
              </div>

              {/* Desktop: Original Layout */}
              <div className="hidden lg:flex flex-row items-end justify-between gap-8 pb-6">
                
                {/* === Logos Left === */}
                <div className="flex flex-nowrap items-center justify-start gap-8 xl:gap-10 pb-2">
                  <Image 
                    src="/sba.svg" 
                    alt="SBA" 
                    width={90} 
                    height={45} 
                    className="w-[75px] xl:w-[85px] h-auto" 
                  />
                  <Image 
                    src="/dbe.svg" 
                    alt="DBE" 
                    width={90} 
                    height={45} 
                    className="w-[75px] xl:w-[85px] h-auto" 
                  />
                  <Image 
                    src="/iso.svg" 
                    alt="ISO" 
                    width={90} 
                    height={45} 
                    className="w-[75px] xl:w-[85px] h-auto" 
                  />
                  <Image 
                    src="/cmmi.svg" 
                    alt="CMMI" 
                    width={90} 
                    height={45} 
                    className="w-[75px] xl:w-[85px] h-auto" 
                  />
                </div>

                {/* === Stats Right === */}
                <div className="flex flex-row items-end justify-end gap-16 xl:gap-20 pb-2">
                  {/* Stat 1 */}
                  <div className="flex flex-col items-start">
                    <span className="font-inter text-white text-[3.5rem] xl:text-[4rem] font-[400] leading-[1] mb-2">
                      99%
                    </span>
                    <span className="text-white/70 text-[0.85rem] xl:text-[0.9rem] font-[300] font-inter uppercase tracking-wider text-left">
                      Clients satisfied and<br />repeating
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col items-start">
                    <span className="font-inter text-white text-[3.5rem] xl:text-[4rem] font-[400] leading-[1] mb-2">
                      150+
                    </span>
                    <span className="text-white/70 text-[0.85rem] xl:text-[0.9rem] font-[300] font-inter uppercase tracking-wider text-left">
                      Projects completed in<br />24 countries
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;