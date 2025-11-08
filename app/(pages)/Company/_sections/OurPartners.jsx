import React from "react";


const SecurityCard = ({ title }) => {
  return (
    <div
      className="
      p-6 md:p-8
     
      border border-white/20
      rounded-xl
      shadow-lg
      transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-purple-400
      flex items-center justify-center
      text-center
      min-h-[120px] md:min-h-[150px]
      w-full
    "
    >
      <p className="font-inter font-[400] font-regular text-white">
        {title}
      </p>
    </div>
  );
};


const TransformSection = () => {
  const cardTitles = [
    "Revolutionizing Commercial Agility",
    "Revolutionizing Defense Innovation",
    "Homeland Security Redefined",
    "Revolutionizing Federal Law Enforcement",
    "Federal Civilian Transformation",
  ];


  const radialGradient =
    "radial-gradient(ellipse at center, #141428 0%, #2d1955 35%, #4b23a0 60%, #6432c8 100%)";

  return (
  
    <section className="relative py-16 md:py-24 overflow-hidden">
    
      <div
        className="absolute inset-0 -z-10 min-h-full"
        style={{ background: radialGradient }}
      />

     
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Header and Description Row */}
        <div className="flex flex-col lg:flex-row justify-between mb-16 text-center lg:text-left">
          {/* Left: Headings */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="font-inter font-[600] text-sm text-white uppercase mb-2">
              OUR PARTNERS
            </p>
            <h1 className="font-Syne font-[500] font-medium font-[1.15] text-4xl md:text-5xl text-white leading-tight">
              Empowering National Security A Paradigm Shift in Mission Support
            </h1>
          </div>

          {/* Right: Description */}
          <div className="lg:w-5/12 pt-4">
            <p className="font-inter font-[400] text-white text-base md:text-lg leading-relaxed">
              At SYSUSA, we go beyond merely supporting our customers' missions;
              we catalyze transformative experiences for Defense, Homeland
              Security, Federal Law Enforcement, and Federal Civilian
            </p>
          </div>
        </div>

        {/* --- Card Grid (5-column layout) --- */}
        <div
          className="
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-5
        "
        >
          {cardTitles.map((title, index) => (
            <SecurityCard key={index} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
