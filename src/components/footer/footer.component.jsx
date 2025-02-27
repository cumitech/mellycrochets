import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-950 via-black to-gray-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Etienne Motors</h3>
          <p className="text-xl text-gray-300">
            Your trusted car sales & rental service in Yaoundé, Cameroon.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/inventory" className="footer-link">
                Browse Cars
              </Link>
            </li>
            <li>
              <Link href="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FiMapPin className="text-red-400" />
              <span className="text-lg">Yaoundé, Cameroon</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-green-400" />
              <Link href="tel:+237674757243" className="footer-link">
                +237 674 75 72 43
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-blue-400" />
              <Link
                href="mailto:info@etiennemotors.com"
                className="footer-link"
              >
                info@etiennemotors.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <FaLinkedinIn size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 text-center border-t border-white/20 pt-6">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Etienne Motors & Services. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
