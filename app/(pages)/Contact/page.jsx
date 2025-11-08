"use client";
import React, { useState } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/sections/footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className="relative">
        <section className="relative h-[50vh] sm:h-[60vh] flex flex-col">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, #141428 0%, #2d1955 35%, #4b23a0 60%, #6432c8 100%)'
            }}
          />

          <Header />

          <div className="relative z-10 flex-1 flex flex-col">
            <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-6 sm:pb-10 md:pb-12 lg:pb-14 flex flex-col justify-center items-center h-full">
              <h1 className="text-white font-[500] font-Syne leading-[1.15] sm:leading-[1.2] text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center">
                Contact Us
              </h1>
            </div>
          </div>
        </section>

        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border border-gray-300 p-3 rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="border border-gray-300 p-3 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="border border-gray-300 p-3 rounded-md w-full mt-6"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="bg-primary text-white font-bold py-3 px-6 rounded-md mt-6">Send Message</button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaPhone className="mr-4 text-primary" />
                  <span>+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-4 text-primary" />
                  <span>contact@society4code.com</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-4 text-primary" />
                  <span>123 Main Street, Anytown, USA 12345</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
