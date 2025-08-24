import { motion } from "framer-motion";
import { FaLaptopCode, FaMicrochip, FaMobileAlt, FaHandsHelping, FaGamepad } from "react-icons/fa";


export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, modern, and scalable websites and web applications tailored to your needs.",
      icon: <FaLaptopCode className="text-4xl text-green-600 mb-4" />,
    },
    {
      title: "IoT Development",
      description:
        "Designing and implementing IoT solutions to connect devices and streamline smart systems.",
      icon: <FaMicrochip className="text-4xl text-green-600 mb-4" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating user-friendly and high-performance mobile applications for both Android and iOS platforms.",
      icon: <FaMobileAlt className="text-4xl text-green-600 mb-4" />,
    },
    {
      title: "IT Consultancy",
      description:
        "Providing expert advice and strategies to optimize technology use and solve business challenges.",
      icon: <FaHandsHelping className="text-4xl text-green-600 mb-4" />,
    },
  ];

    const joinUs =
    "https://docs.google.com/forms/d/1TDQJ6AY6TNKT3zI0YO6u9SHCoRXm0OGbgGX4EEV1Z0I/edit";


  return (
    <section className="bg-[#ccffcc] py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#18392B]"
        >
          Our <span className="text-[#18392B]">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 leading-relaxed text-lg mt-4 max-w-3xl mx-auto"
        >
          At Equalis, we provide a range of technology services designed to empower businesses, communities, and individuals through innovation and accessibility.
        </motion.p>
      
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition transform"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-700 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Open Projects */}
      <div className="max-w-6xl mx-auto px-6 py-20 mt-20 bg-white rounded-2xl shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-900 text-center mb-8"
        >
          Open Projects
        </motion.h2>

        {/* GameSense Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <FaGamepad className="text-5xl text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">GameSense</h3>
            <p className="text-gray-600 mb-6">
              GameSense is an innovative project focused on enhancing accessibility in sports for players with hearing impairments.
              It uses smart wearable technology to provide visual and vibration alerts, ensuring that no player misses critical in-game signals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={joinUs}
                className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
              >
                Join Us
              </a>
              <a
                href="/contact"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/3.jpeg"
              alt="GameSense Project"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </div>
        </motion.div>
      </div>

  
    </section>
  );
}
