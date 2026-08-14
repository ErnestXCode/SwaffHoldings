import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Firm<span className="text-slate-400 dark:text-slate-600">Name</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-500 mb-6 leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex gap-2">
              <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-business" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  Our Business
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-slate-400 mt-1 flex-shrink-0 text-sm" />
                <span className="text-sm text-slate-500 dark:text-slate-500 font-light">
                  123 Business Avenue<br />
                  Suite 100<br />
                  Nakuru, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-slate-400 flex-shrink-0 text-sm" />
                <a href="tel:+15551234567" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-slate-400 flex-shrink-0 text-sm" />
                <a href="mailto:info@firmname.com" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                  info@SwaffHolding.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 dark:text-slate-600 font-light">
              © {new Date().getFullYear()} SwaffHolding. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-light">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;