import React from "react";
import { Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo/lfcLogo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl rounded-full tracking-tighter overflow-hidden">
                  <img src={logo} alt="logo" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">
                  LFC Sunnyvale
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Living Faith Church Branch
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A community of believers transforming lives through faith, love,
              and service.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-gray-800 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Units", path: "/units" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors flex items-center group cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times Column */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-gray-800 inline-block">
              Service Times
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between sm:block lg:flex">
                <span className="font-medium text-gray-300">Sunday:</span>
                <span className="ml-1">7:00 AM & 9:00 AM</span>
              </li>
              <li className="flex justify-between sm:block lg:flex">
                <span className="font-medium text-gray-300">Wednesday:</span>
                <span className="ml-1">5:30 PM - 7:30 PM</span>
              </li>
              {/* <li className="flex justify-between sm:block lg:flex">
                <span className="font-medium text-gray-300">:</span> 
                <span className="ml-1">7:00 PM</span>
              </li>
              <li className="flex justify-between sm:block lg:flex">
                <span className="font-medium text-gray-300">Saturday:</span> 
                <span className="ml-1">10:00 AM</span>
              </li> */}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col">
            <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-gray-800 inline-block self-start">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-6">
              {[
                {
                  Icon: Facebook,
                  color: "bg-blue-600",
                  hover: "hover:bg-blue-700",
                },
                {
                  Icon: Instagram,
                  color:
                    "bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600",
                  hover: "opacity-90 hover:opacity-100",
                },
                {
                  Icon: Youtube,
                  color: "bg-red-600",
                  hover: "hover:bg-red-700",
                },
              ].map((social, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 ${social.color} ${social.hover} rounded-xl flex items-center justify-center transition-all transform hover:-translate-y-1 shadow-md`}
                >
                  <social.Icon size={18} className="text-white" />
                </button>
              ))}
            </div>
            <a
              href="mailto:info@lfcsunnyvale.org"
              className="text-gray-400 text-sm hover:text-white transition-colors flex items-center group"
            >
              <Mail
                className="mr-2 text-blue-500 group-hover:scale-110 transition-transform"
                size={16}
              />
              livingfaithchurchsunnyvale@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm gap-4">
            <p>
              © {new Date().getFullYear()} Living Faith Church Sunnyvale. All
              rights reserved.
            </p>
            <p className="flex items-center">
              Built by Temple with{" "}
              <span className="text-red-500 mx-1 animate-pulse">❤️</span> for
              the Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
