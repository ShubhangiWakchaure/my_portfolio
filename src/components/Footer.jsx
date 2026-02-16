import React from "react";

import locationIcon from "../assets/map.png";
import emailIcon from "../assets/gmail.png";
import phoneIcon from "../assets/phone-call.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="relative text-white pt-16 pb-8 px-6 overflow-hidden">
      
      {/* Soft Glam Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#101223] via-[#14162c] to-[#0f1120]"></div>

      {/* Soft Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-center">

          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={locationIcon}
              alt="location"
              className="w-9 h-9 mb-3 mx-14 object-contain"
            />
            <p className="text-gray-300">
              Nashik, Maharashtra, India
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <img
              src={emailIcon}
              alt="email"
              className="w-9 h-9 mb-3 object-contain"
            />
            <p className="text-gray-300 text-sm">
              shubhangiwakchaure3@gmail.com
            </p>
            <p className="text-gray-400 text-sm">
              shubhangiwakchaure2004@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-end">
            <img
              src={phoneIcon}
              alt="phone"
              className="w-9 h-9 mb-3 mx-8 object-contain"
            />
            <p className="text-gray-300">
              +91 7350400437
            </p>
          </div>

        </div>

        {/* Social Icons (NO Background) */}
        <div className="flex justify-center gap-8 mt-12">
          
          <a href="https://www.linkedin.com/in/shubhangi-wakchaure-1752522b2/" className="hover:scale-110 transition duration-300">
            <img
              src={linkedinIcon}
              alt="linkedin"
              className="w-6 h-6 object-contain"
            />
          </a>

          <a href="https://github.com/ShubhangiWakchaure" className="hover:scale-110 transition duration-300">
            <img
              src={githubIcon}
              alt="github"
              className="w-6 h-6 object-contain"
            />
          </a>

          <a href="#" className="hover:scale-110 transition duration-300">
            <img
              src={instagramIcon}
              alt="instagram"
              className="w-6 h-6 object-contain"
            />
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
          © 2026 Shubhangi Wakchaure. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;