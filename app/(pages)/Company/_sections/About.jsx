import { Check } from "lucide-react";
import Image from "next/image";
export default function WhoWeAre() {
  const beliefs = [
    "Trust & Integrity",
    "Purposeful Innovation",
    "Digital Transformation",
    "Agility & Excellence",
    "Lasting Impact",
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-lg mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto max-w-7xl">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">
          <h2 className="text-indigo-600 font-[600] font-inter text-sm sm:text-base tracking-wider uppercase mb-2 sm:mb-3">
            WHO WE ARE
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-indigo-600 rounded-full mx-auto sm:mx-0"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-Syne font-[500] text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
              Our Belief
            </h3>

            <p className="font-inter font-[400] text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-center sm:text-left">
              At SYSUSA, we believe in creating a better, more connected world
              built on trust, integrity, and innovation. We help businesses
              modernize, secure, and grow through technology that empowers
              lasting success.
            </p>

            {/* Values List */}
            <ul className="space-y-3 sm:space-y-4">
              {beliefs.map((belief, index) => (
                <li
                  key={index}
                  className="flex items-start sm:items-center gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Image
                      src="/icons/checkicon.svg"
                      alt="check icon"
                      width={20}
                      height={20}
                      className="text-indigo-600"
                    />
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg font-inter font-[400] font-1rem">
                    {belief}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 md:order-2 mb-8 md:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/aboutimages/about.jpg"
                alt="Team collaboration meeting at SYSUSA office"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
