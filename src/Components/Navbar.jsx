import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  // Close mobile menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-white/[0.08] text-white shadow-sm ring-1 ring-white/[0.06]"
        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${
      isActive
        ? "bg-white/[0.08] text-white ring-1 ring-white/[0.06]"
        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
    }`;

  return (
    <>
      {/* Keep ThemeToggle imported for future use.
          Temporarily disabled from the UI while the site is dark-only. */}

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-2.5"
            aria-label="SwaffHolding home"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white transition-transform duration-200 group-hover:scale-[1.03]">
              <span className="text-sm font-bold tracking-tight text-slate-950">
                SH
              </span>
            </div>

            <div className="leading-none">
              <div className="text-base font-bold tracking-tight text-white sm:text-lg">
                Swaff
                <span className="font-medium text-slate-500">
                  Holding
                </span>
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
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

            {/* Theme toggle intentionally disabled for now */}
            <div className="hidden">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center md:hidden">
            {/* Theme toggle intentionally disabled for now */}
            <div className="hidden">
              <ThemeToggle />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white active:bg-white/[0.08]"
            >
              <FaBars className="text-lg" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(86vw,360px)] flex-col border-l border-slate-800 bg-slate-950 shadow-2xl shadow-black/50 transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-800 px-4 sm:px-6">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
              <span className="text-sm font-bold tracking-tight text-slate-950">
                SH
              </span>
            </div>

            <div className="text-base font-bold tracking-tight text-white">
              Swaff
              <span className="font-medium text-slate-500">
                Holding
              </span>
            </div>
          </NavLink>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4 sm:p-5">
          <NavLink
            to="/"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
            end
          >
            <FaHome className="shrink-0 text-sm text-slate-500" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/our-business"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaBriefcase className="shrink-0 text-sm text-slate-500" />
            <span>Our Business</span>
          </NavLink>

          <NavLink
            to="/leadership"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaUsers className="shrink-0 text-sm text-slate-500" />
            <span>Leadership</span>
          </NavLink>

          <NavLink
            to="/contact-us"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaEnvelope className="shrink-0 text-sm text-slate-500" />
            <span>Contact Us</span>
          </NavLink>
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-slate-800 p-4 sm:p-5">
          <div className="mb-3 h-px w-10 bg-indigo-500/60" />

          <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
            SwaffHolding
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Logistics &amp; Consulting
          </p>
        </div>
      </aside>
    </>
  );
}

export default Navbar;