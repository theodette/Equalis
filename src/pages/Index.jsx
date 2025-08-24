import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom"
import { FaQuoteLeft, FaQuoteRight, FaUsers, FaLightbulb, FaHandsHelping, FaGlobe } from "react-icons/fa";

const Index = ({ interval = 3000 }) => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  const values = [
    { title: "Inclusivity", text: "Everyone deserves to belong", icon: <FaUsers className="text-3xl text-green-600 mb-4" /> },
    { title: "Innovation", text: "Technology should solve real challenges", icon: <FaLightbulb className="text-3xl text-green-600 mb-4" /> },
    { title: "Impact", text: "Our solutions must change lives", icon: <FaGlobe className="text-3xl text-green-600 mb-4" /> },
    { title: "Collaboration", text: "Together, we build a more equal world", icon: <FaHandsHelping className="text-3xl text-green-600 mb-4" /> },
  ];
const joinUs ="https://docs.google.com/forms/d/1TDQJ6AY6TNKT3zI0YO6u9SHCoRXm0OGbgGX4EEV1Z0I/edit"
  return (
    <div className="relative h-full w-full bg-[#ccffcc] flex flex-col items-center justify-center text-[#D9D9D9] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section>
        <div className="absolute hidden md:flex h-screen inset-0 bg-[#18392B]" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
        <div className="flex h-screen text-left space-x-6 font-serif pt-10">

          {/* Hero Text */}
          <motion.div
            className="flex flex-col md:w-1/2 justify-start space-y-6 px-14"
            initial={{ opacity: 0, y: -100, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            style={{ transformOrigin: "top", perspective: "1000px" }}
          >
            <h1 className="text-7xl text-[#18392B] md:text-[#D9D9D9] font-bold">Welcome to</h1>
            <h1 className="text-7xl text-[#18392B] md:text-[#D9D9D9] font-bold">Equalis</h1>

            {/* Mobile Text */}
            <h2 className="md:hidden text-xl font-semibold text-[#18392B]">
              your idea deserves to be brought to life. We offer IoT projects, web and mobile app development...
              <Link to="/services" className="text-green-600" > View More</Link>
            </h2>

            {/* Desktop Text */}
            <p className="hidden md:block text-gray-300 font-semibold text-xl">
              your idea deserves to be brought to life. We offer IoT projects, web and mobile app development...
              <Link className="text-[#B8FFB8]" href="/services"> View More</Link>
            </p>
            <Link to='/about' className='hidden md:flex bg-[#B8FFB8] p-1 text-green-600 text-xl  font-bold rounded-lg w-1/2'>About Us</Link>
          </motion.div>

          {/* Hero Images */}
          <div className='w-1/2 hidden md:flex justify-center mb-10 max-w-4xl relative'>
            <img className='absolute rounded-2xl h-96 w-80 shadow-2xl shadow-[#e21584]' src="dc.jpeg" alt="" />
            <img className='relative left-36 top-20 rounded-2xl h-96 w-80 object-cover shadow-2xl shadow-[#18392B]' src="led.jpeg" alt="" />
            <img className='absolute top-32 left-7 rounded-2xl h-80 w-80 shadow-2xl shadow-[#e21584]' src="esp.jpeg" alt="" />
          </div>
        </div>
      </section>

{/* ================= ABOUT + SERVICES SUMMARY ================= */}
<section className="w-screen px-6 sm:px-10 md:px-20 py-16 bg-gray-50 text-gray-900">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

    {/* Image Swiper */}
    <div className="w-full md:w-1/2 flex justify-center order-2 md:order-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={{ delay: interval, disableOnInteraction: true }}
        speed={800}
        pagination={{ clickable: true }}
      >
        {["11.jpeg", "10.jpeg", "15.jpeg", "12.jpeg", "14.jpeg"].map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Visual ${idx + 1}`}
              className="w-64 sm:w-72 md:w-80 mx-auto object-contain rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Text Summary */}
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-1 md:order-1">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#18392B]">
        Empowering Through Technology
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
        Equalis is a social impact startup breaking barriers for people with disabilities.  
        We create inclusive solutions—from web & mobile apps to IoT devices and IT consultancy—that help everyone thrive.
      </p>
      <p className="text-base sm:text-lg md:text-lg text-gray-700 font-medium leading-relaxed">
        Explore our innovative projects or join us to make an impact. Together, we build technology that empowers.
      </p>

      {/* Quote */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
        <FaQuoteLeft className="text-2xl sm:text-3xl text-green-600" />
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          My Ability is Stronger Than My Disability
        </h3>
        <FaQuoteRight className="text-2xl sm:text-3xl text-green-600" />
      </div>

      {/* Call to Action */}
      <NavLink to="/services">
        <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition">
          Explore Services & Projects
        </button>
      </NavLink>
    </div>
  </div>
</section>






      {/* ================= VALUES SECTION ================= */}
      <section className="md:py-16">
        <div className="px-4 sm:px-10 md:px-20">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition transform"
              >
                {val.icon}
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{val.title}</h3>
                <p className="text-base text-gray-600">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="px-4 sm:px-10 md:px-20 py-10 flex justify-center">
        <Link to='/contact' className='bg-green-600 px-6 py-2 text-[#B8FFB8] text-xl font-bold rounded-lg hover:bg-[#18392B]'>
          Contact us today
        </Link>
      </section>

    </div>
  );
};

export default Index;
