import { Button } from "antd";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const buttonStyles = {
  base: {
    padding: 5,
    border: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: 30,
    cursor: "pointer",
    fontSize: "16px",
  },
  whatsapp: {
    background: "#25D366",
    color: "white",
  },
  facebook: {
    background: "#1877F2",
    color: "white",
  },
  instagram: {
    background:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
      color: "white",
  },
  twitter: {
    background: "#1DA1F2",
    color: "white",
  },
  tiktok: {
    background: "#f3f3f3",
    color: "#000",
  },
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-950 via-black to-gray-950 text-white pt-12 pb-3 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  sm:justify-items-center">
        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Social Media Pages</h4>
          <div className="flex gap-4">
            <Button
               href="https://wa.me/+237681077051"
              shape="circle"
              icon={<FaWhatsapp size={24} className="text-blue-500" />}
              style={{
                ...buttonStyles.base,
                ...buttonStyles.whatsapp,
              }}
            />
            <Button
              href="https://www.instagram.com/mellycrochets_?igsh=cTkwZTc1eDcyaThw&utm_source=qr"
              shape="circle"
              icon={<FaInstagram size={24} className="text-pink-400" />}
              style={{
                ...buttonStyles.base,
                ...buttonStyles.instagram,
              }}
            />
            <Button
              href="https://x.com/mellycrochets?s=21"
              shape="circle"
              icon={<FaTwitter size={24} className="text-blue-500" />}
              style={{
                ...buttonStyles.base,
                ...buttonStyles.twitter,
              }}
            />

            <Button
              href="https://www.tiktok.com/@mellycrochets_?_t=ZM-8uhxGqcniqN&_r=1"
              shape="circle"
              icon={<FaTiktok size={24} className="text-black" />}
              style={{
                ...buttonStyles.base,
                ...buttonStyles.tiktok,
              }}
            />
            <Button
              href="https://www.facebook.com/mellynchindo"
              shape="circle"
              icon={<FaFacebookF size={24} className="text-blue-500" />}
              style={{
                ...buttonStyles.base,
                ...buttonStyles.facebook,
              }}
            />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/after_cares" className="footer-link">
                Aftercare
              </Link>
            </li>
            <li>
              <Link href="/crochets" className="footer-link">
                Crochet Listings
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="footer-link">
                Privacy Policy
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
              <span className="text-lg">Bamenda, Cameroon</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-green-400" />
              <Link href="tel:+237674757243" className="footer-link">
                +237 681 077 051 /640 922 135
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-blue-400" />
              <Link
                href="mailto:mellycrochets25@gmail.com"
                className="footer-link"
              >
                mellycrochets25@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center pt-6">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} MellyCrochets & Services. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
