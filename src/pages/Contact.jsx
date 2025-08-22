
import { HiOutlineMail, HiOutlinePhone, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineStatusOffline, HiOutlineDesktopComputer, HiOutlineLink } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
//import { Helmet } from "react-helmet-async";
const Contact = () => {

 const ig =""
const fb =""
const whats = "https://wa.me/250781542221"
const tel="tel:+250785382375"


    return (
<section className="bg-[#ccffcc] text-black py-16 px-6 sm:px-10 lg:px-20">


  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#18392B]">Contact Us</h2>
      <h2 className="text-xl sm:text-xl font-bold mb-8 text-gray-900">Contact Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {/* Phone */}
      <div className="flex flex-col items-center bg-white space-y-2 text-black rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
       <p className="font-semibold">Call/Whatsup</p>
        
         {/* WhatsApp Chat */}
          <a
            href={whats}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#008000] text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            💬 Chat with Us
          </a>
          {/* Phone Call */}
          <a
            href={tel}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-[#008000] transition"
          >
            📞 Call Us
          </a>
      </div>

      {/* Email */}
      <div className="flex flex-col items-center bg-white text-black rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
        <HiOutlineMail className="text-3xl text-[#B8FFB8] mb-4" />
        <p className="font-semibold">Email</p>
        <p className="text-gray-700 mt-1 text-center">equalistech@gmail.com   </p>
      </div>

      {/* Location */}
      <div className="flex flex-col items-center bg-white text-black rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
        <HiOutlineLocationMarker className="text-3xl text-[#B8FFB8] mb-4" />
        <p className="font-semibold">Location</p>
        <p className="text-gray-700 mt-1 text-center">
          Kigali, Gasabo <br /> 
        </p>
      </div>
    </div>
          <h2 className="text-lg sm:text-xl font-bold p-16 text-[#18392B]">Connect with us vie Social Media</h2>

             {/* Location */}
      <div className="flex flex-col items-center bg-white text-black rounded-xl space-y-2 p-4 shadow-md hover:scale-105 transform transition duration-300">
        <HiOutlineLink className="text-3xl text-[#B8FFB8] mb-1" />
       <a href={ig} className="text-red-700 hover:text-[#B8FFB8] flex text-2xl space-x-2"> <FaInstagram /> <p className="text-gray-900 text-lg">Follow us</p></a>
      <a href={fb} className="text-blue-800 hover:text-[#B8FFB8] flex text-2xl space-x-2"> <FaFacebook /> <p className="text-gray-900 text-lg">Follow us</p> </a>

      </div>
     
  </div>
</section>

  );
};

export default Contact;
