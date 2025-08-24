import { motion } from "framer-motion";
import { FaLightbulb, FaGlobe } from "react-icons/fa";

export default function About() {

  const joinUs ="https://docs.google.com/forms/d/1TDQJ6AY6TNKT3zI0YO6u9SHCoRXm0OGbgGX4EEV1Z0I/edit"

  const team = [
    {
      name: "Norbert Izere Rukundo",
      role: "Founder & CEO",
      img: "/2.jpeg",
      description:
        "Health professional, athlete, and sign language communicator dedicated to empowering people of all abilities.",
    },
    {
      name: "Anna Theodette Ishimwe",
      role: "Co-Founder & CTO",
      img: "/4.jpeg",
      description:
        "Basketball player and software engineer focused on bridging technology and disability to create innovative, inclusive solutions.",
    },
    
  ];

  return (
    <section className="bg-[#ccffcc] text-gray-900">

{/* Hero / Intro Section */}
<div className="bg-gradient-to-b from-green-50 to-green-100">
  <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center md:items-start gap-12">

    {/* Text Section */}
    <motion.div
      className="flex-1 text-center md:text-left"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
        About <span className="text-green-600">Equalis</span>
      </h1>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose max-w-lg">
        Equalis is a social impact startup committed to creating inclusive technologies that empower people of all abilities. 
        Our mission is to design solutions that break down barriers in sports, education, communication, and everyday life, 
        ensuring equal opportunities for everyone.
      </p>
   
    </motion.div>

    {/* Image Section */}
    <motion.div
      className="flex-1 w-full max-w-md md:max-w-full rounded-xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <img
        src="/5.jpeg"
        alt="Equalis team working"
        className="w-full h-80 md:h-96 object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
    </motion.div>

  </div>
</div>



      {/* What We Do */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12"
        >
          What We Do
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3 text-left">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Assistive Technologies</h3>
            <p className="text-gray-600">
              We create tools that help people with different abilities participate fully in sports and daily life.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Innovative Alerts</h3>
            <p className="text-gray-600">
              Our solutions provide visual, vibration, and alternative alerts where sound or traditional communication is not enough.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Community Partnerships</h3>
            <p className="text-gray-600">
              We collaborate with organizations and institutions to ensure equal access and participation across all sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2">
        {[
          {
            title: "Our Vision",
            text: "To create a world where technology enables equality, making inclusion a reality for all.",
            icon: <FaGlobe className="text-3xl text-green-600 mb-4" />,
          },
          {
            title: "Our Mission",
            text: "To develop innovative and accessible solutions that remove barriers and empower individuals.",
            icon: <FaLightbulb className="text-3xl text-green-600 mb-4" />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white rounded-2xl p-8 shadow hover:shadow-lg text-center"
          >
            {item.icon}
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:scale-105 transition transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 mx-auto rounded-md object-cover mb-4 sm:mb-6 border-2 border-green-500"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm sm:text-base text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className=" py-16 text-center text-px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#18392B] font-bold mb-8">
          Join us in building inclusive technologies
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href={joinUs}
            className="bg-green-700  text-white px-6 py-2 rounded-xl shadow hover:bg-[#18392B] transition"
          >
            Join Us
          </a>
          <a
            href="/contact"
            className="bg-green-700  text-white px-6 py-2 rounded-xl shadow hover:bg-[#18392B] transition"
          >
            Contact Us
          </a>
        </div>
      </div>

    </section>
  );
}
