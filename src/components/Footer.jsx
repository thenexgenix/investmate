import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import lnvestmate from '../assets/logo/investmate-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#00B67A] via-[#00C88A] to-[#00DA9A] backdrop-blur-[3%] text-black px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Newsletter */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Replace with your logo */}
            <div className="bg-white  px-3 py-2 rounded-sm  flex items-center justify-center">
              <img src={lnvestmate} alt="lnvestmate " />
            </div>
          </div>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Your email here"
              className="w-full sm:w-auto flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Join
            </button>
          </form>
          <p className="text-xs mt-2">
            By subscribing, you agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and consent to receive updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog Posts</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Invest Safely</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Community Impact</a></li>
            <li><a href="#">Investor Tools</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebook /> <a href="#">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram /> <a href="#">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter /> <a href="#">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin /> <a href="#">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube /> <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black mt-10 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2024, All rights reserved.</p>
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of Service
          </a>
          <a href="#" className="underline">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
