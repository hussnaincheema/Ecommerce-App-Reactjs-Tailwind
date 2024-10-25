import React from "react";
import { footerLinks } from "../data/index";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gary-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-salmonPink">E-Shop</h3>
          <p className="mt-4 text-black">
            Your one-step for all your needs. Shop with use and experience the
            best online shopping experiences.
          </p>
        </div>

        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold text-black">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.navigate}
                  className="text-black hover:underline decoration-salmonPink decoration-2 underline-offset-4"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-black">Follow Us</h4>
          <div className="flex space-x-4 mt-4 text-black">
            <a
              href="https://web.facebook.com/profile.php?id=100011657684339"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-salmonPink"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/imhussnaincheema/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-salmonPink"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/hussnaincheema"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-salmonPink"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hussnain-cheema-711016186/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-salmonPink"
            >
              <FaLinkedin />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8 text-black">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded-l-lg bg-gray-200 border focus:outline-none focus:border-gray-600"
            />
            <button className="bg-salmonPink text-white font-bold px-4 py-2 rounded-r-lg border border-salmonPink">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20 border-t border-salmonPink pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-black">&copy; 2024 E-Shop All rights reserved</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a className="hover:underline decoration-salmonPink decoration-2 underline-offset-4 text-black">
              Privacy Policy
            </a>
            <a
              className="hover:underline decoration-salmonPink decoration-2 underline-offset-4 text-black"
              href=""
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
