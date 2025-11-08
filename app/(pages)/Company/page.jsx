import Hero from "@/app/components/sections/Hero";
import React from "react";
import Image from "next/image";
import Header from "@/app/components/layout/Header";
import Button from "@/app/components/ui/Button";
import About from "./_sections/About";
import Journey from "./_sections/Journey";
import CoreValues from "./_sections/CoreValues";
import Footer from "@/app/components/sections/footer";
import TransformSection from "@/app/components/sections/TransformSection";
import { Stats } from "fs";
import StatsSection from "./_sections/StatsSection";
import CommunityImpact from "./_sections/Communityimpact";
import LeadershipTeam from "./_sections/LeadershipTeam";
import TechnicalCertifications from "./_sections/TechnicalCertifications";
import TopIndustryCertifications from "./_sections/TopIndustryCertifications";
import BussinessCertification from "./_sections/BussinessCertification";
import OurServices from "./_sections/OurServices";

function page() {
  return (
    <>
      <div className="relative">
        <section className="relative h-[80vh] sm:h-[90vh] flex flex-col">
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, #141428 0%, #2d1955 35%, #4b23a0 60%, #6432c8 100%)'
            }}
          />

          <Header />

          <div className="relative z-10 flex-1 flex flex-col">
            <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-6 sm:pb-10 md:pb-12 lg:pb-14 flex flex-col justify-between h-full">
              <div className="max-w-4xl flex-shrink-0">
                <h1 className="text-white font-[500] font-Syne leading-[1.15] sm:leading-[1.2] text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Innovative and Leading-edge Technology Solutions and Services
                  Company
                </h1>

                <Button className="w-65">Explore Services</Button>
              </div>
            </div>
          </div>
        </section>

        <div className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 z-20">
          <About/>
        </div>
        <Journey/>
       <CoreValues/>
       <StatsSection/>
       <OurServices/>
       <TechnicalCertifications/>
       <TopIndustryCertifications/>
       <LeadershipTeam/>
       <CommunityImpact/>
      <TransformSection/>
       <Footer/>
      </div>
    </>
  );
}

export default page;
