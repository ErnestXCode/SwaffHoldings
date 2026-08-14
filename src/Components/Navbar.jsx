import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcase,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
      isActive
        ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-bold text-lg">SH</span>
            </div>

            <div className="leading-tight">
              <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Swaff<span className="text-slate-400 dark:text-slate-500 font-medium">Holding</span>
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>

            <NavLink to="/our-business" className={linkClass}>
              Our Business
            </NavLink>

            <NavLink to="/leadership" className={linkClass}>
              Leadership
            </NavLink>

            <NavLink to="/contact-us" className={linkClass}>
              Contact Us
            </NavLink>

            <div className="ml-4 pl-4 border-l border-slate-200 dark:border-slate-800">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-black shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-bold text-lg">F</span>
            </div>

            <div>
              <h2 className="font-bold text-slate-900 dark:text-white">
                Swaff<span className="text-slate-400 dark:text-slate-500 font-medium">Holding</span>
              </h2>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-1 p-4">
          <NavLink
            to="/"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
            end
          >
            <FaHome className="text-slate-500" />
            Home
          </NavLink>

          <NavLink
            to="/our-business"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaBriefcase className="text-slate-500" />
            Our Business
          </NavLink>

          <NavLink
            to="/leadership"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaUsers className="text-slate-500" />
            Leadership
          </NavLink>

          <NavLink
            to="/contact-us"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaEnvelope className="text-slate-500" />
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;