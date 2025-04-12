import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerlogo from "../../assets/footerlogo.png";

const Footer = () => {
  return (
    <>
      {/* Footer background with gradient styling */}
      <div
        style={{
          background:
            "linear-gradient(4.22deg, rgb(0, 182, 122) -91.818%, rgb(46, 116, 236) -63.532%, rgb(0, 182, 122) 12.024%, rgb(46, 116, 236) 134.09%)",
        }}
      >
        {/* Main footer section with padding */}
        <div className="footer sm:footer-horizontal text-base-content p-10">
          
          {/* Left section with logo, description, and subscription form */}
          <aside>
            <img src={footerlogo} alt="Footer Logo" />
            <p>
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>

            {/* Email subscription form */}
            <div className="join gap-5 mt-5">
              <div>
                <label className="input validator join-item bg-transparent">
                  {/* Email icon */}
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  {/* Email input field */}
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                {/* Email validation message (hidden by default) */}
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              {/* Subscribe button */}
              <button className="btn btn-neutral bg-transparent join-item">
                Join
              </button>
            </div>

            {/* Privacy notice */}
            <p>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </aside>

          {/* Quick Links section */}
          <nav>
            <h6 className="footer-title font-bold ">Quick Links</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Support Center</a>
            <a className="link link-hover">FAQs</a>
            <a className="link link-hover">Blog Posts</a>
          </nav>

          {/* Resources section */}
          <nav>
            <h6 className="footer-title font-bold">Resources</h6>
            <a className="link link-hover">Invest Safely</a>
            <a className="link link-hover">Our Team</a>
            <a className="link link-hover">Success Stories</a>
            <a className="link link-hover">Community Impact</a>
            <a className="link link-hover">Investor Tools</a>
          </nav>

          {/* Social media links */}
          <nav>
            <h6 className="footer-title font-bold">Connect With Us</h6>
            <div className="flex items-center gap-2 text-lg">
              <FaFacebook />
              <a className="link link-hover">Facebook</a>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FaInstagram />
              <a className="link link-hover">Instagram</a>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FaXTwitter />
              <a className="link link-hover">Twitter</a>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FaLinkedin />
              <a className="link link-hover">Linkedin</a>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FaYoutube />
              <a className="link link-hover">Youtube</a>
            </div>
          </nav>
        </div>

        {/* Bottom copyright and legal links section */}
        <div className="footer sm:footer-horizontal  items-center p-4">
          <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Cookie Settings</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
