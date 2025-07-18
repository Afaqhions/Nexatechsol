import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when a link is clicked
  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Nexa<span className="text-yellow-400">TechSol</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link className="hover:text-blue-400 cursor-pointer" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 cursor-pointer" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 cursor-pointer" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 cursor-pointer" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-blue-400">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} className="hover:text-yellow-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/nexatechsol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="hover:text-yellow-400" />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-blue-400">
          {menuOpen ? (
            <AiOutlineClose
              size={24}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={24}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-lg mt-4">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 cursor-pointer block"
                onClick={handleNavigation}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-400 cursor-pointer block"
                onClick={handleNavigation}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 cursor-pointer block"
                onClick={handleNavigation}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 cursor-pointer block"
                onClick={handleNavigation}
              >
                Contact
              </Link>
            </li>
            <div className="flex space-x-4 text-blue-400 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} className="hover:text-yellow-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} className="hover:text-yellow-400" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
