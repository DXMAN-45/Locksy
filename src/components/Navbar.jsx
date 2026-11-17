
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative z-50 w-full bg-[#162556] px-5 sm:px-8">

      <div className="mx-auto flex min-h-[65px] h-[9vh] max-w-7xl items-center justify-between">

        {/* Logo and Brand */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            className="w-8 sm:w-10 object-contain"
            src="/favicon.png"
            alt="logo"
          />

          <h1 className="text-2xl sm:text-4xl font-bold text-[#92c6f9]">
            <span className="text-[#2f0bef]">&lt;</span>
            Lock
            <span className="text-[#2f0bef]">s</span>
            <span className="text-[#7e05ec]">y</span>
            <span className="text-[#2f0bef]">/&gt;</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-8">
          <li><Link className="navbaratag" to="/">Home</Link></li>
          <li><Link className="navbaratag" to="/contact">Contact</Link></li>
          <li><Link className="navbaratag" to="/about">About</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white text-3xl font-bold"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "×" : "☰"}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[hsl(219.38deg_33.33%_62.35%)] shadow-lg sm:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <Link onClick={closeMenu} className="navbaratag" to="/">Home</Link>
            </li>
            <li>
              <Link onClick={closeMenu} className="navbaratag" to="/contact">Contact</Link>
            </li>
            <li>
              <Link onClick={closeMenu} className="navbaratag" to="/about">About</Link>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
