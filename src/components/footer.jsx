import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            Nexa<span className="text-yellow-400">TechSol</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Empowering solutions through innovation.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Highlights</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Testimonials</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">Connect With Us</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: <a href="mailto:info@nexatechsol.com" className="hover:text-yellow-400">nexatechsol@gmail.com</a></li>
            <li>Phone: <span className="text-gray-400">+92 323 6148322</span></li>
          </ul>
          <div className="flex gap-4 mt-4 text-blue-400">
            <a href="#"><FaGithub className="hover:text-yellow-400" size={20} /></a>
            <a href="#"><FaLinkedin className="hover:text-yellow-400" size={20} /></a>
            <a href="mailto:info@nexatechsol.com"><FaEnvelope className="hover:text-yellow-400" size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 flex-col border-t border-slate-700 pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Nexatechsol. All rights reserved.</p>
       <p>Designed & Developed By-Almaco +92-309-7876497</p> 
      </div>
    </footer>
  );
};

export default Footer;
