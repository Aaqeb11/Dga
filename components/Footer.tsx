import React from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"; // Import icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#626361] text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Logo and All Rights Reserved */}
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <Image
            src="/harsh.png" // Path to your logo image in the public folder
            alt="Logo"
            width={40} // Adjust width based on your logo
            height={40} // Adjust height based on your logo
          />
          <p className="text-sm">All Rights Reserved</p>
        </div>

        {/* Center Section: Company Name */}
        <div className="text-xl font-bold text-center mt-4 md:mt-0">
          HARSH INTERIOR
        </div>

        {/* Right Section: Contact Info and Social Media */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          {/* Contact Details */}
          <div className="text-sm text-gray-300 text-center md:text-left">
            <p>+123456789</p>
            <p>harshint@gmail.com</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#69BF06] hover:text-gray-300 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#69BF06] hover:text-gray-300 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#69BF06] hover:text-gray-300 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
