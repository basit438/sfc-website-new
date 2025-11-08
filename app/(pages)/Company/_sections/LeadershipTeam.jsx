// components/LeadershipTeam.jsx
"use client";
import React from "react";
import Image from "next/image";

export default function LeadershipTeam() {
  const team = [
    {
      name: "Sumara Baig",
      role: "Co-Founder & President",
      image: "/images/team/sumara.jpg", // Replace with your actual image paths
    },
    {
      name: "Muneer Baig",
      role: "Co-Founder & CEO",
      image: "/images/team/muneer.webp",
    },
    {
      name: "Muatasim Baig",
      role: "ServiceNow Delivery Lead",
      image: "/images/team/muatasim.jpg",
    },
  ];

  return (
    <section className="bg-[#f9f9fb] py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start justify-between border-b border-gray-200 pb-6 px-20 mb-10">
        <h2 className="text-3xl md:text-4xl font-Syne font-[600] font-semibold text-[#0b1a3d] leading-tight">
          Meet Our <br /> Leadership Team
        </h2>
        <p className="text-[#3c4d6b] font-inter font-[400] max-w-md mt-4 md:mt-0">
          Experienced leaders driving innovation and excellence across our
          organization.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="w-72 h-80 bg-gradient-to-b from-white to-[#9a8ac4] rounded-2xl overflow-hidden mb-4 relative">
              {/* Add actual image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#9a8ac4]/60" />
            </div>
            <h3 className="text-[#0b1a3d] font-medium text-lg">
              {member.name}
            </h3>
            <p className="text-[#3c4d6b] text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
