import React, { useState } from "react";
import { hamburger, xicon } from "../assets/icons";
import { headerLogo } from "../assets/images/";
import { navLinks } from "../constants";
import "../index.css"; // Import your CSS file with the animation classes

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Determine which CSS class to apply based on isMenuOpen
  const menuClass = isMenuOpen ? "menu-open" : "menu-closed";

  return (
    <header className="z-10 w-full max-container">
      <nav className="flex justify-between items-center xl:ml-0 ml-8">
        <a href="/" className="xl:ml-40">
          <img
            src={headerLogo}
            alt="logo"
            width={169}
            height={59}
            className="m-0 w-[169px] h-[59px]"
          />
        </a>
        {/* Hamburger or X Icon for Mobile */}
        <div
          className="xl:hidden absolute right-0 mr-8 cursor-pointer top-4 z-40"
          onClick={toggleMenu}
        >
          <img
            src={isMenuOpen ? xicon : hamburger}
            alt={isMenuOpen ? "close icon" : "hamburger icon"}
            width={25}
            height={25}
          />
        </div>
        {/* Mobile Dropdown Menu */}
        <ul
          className={`${
            menuClass // Apply the dynamic class here
          } xl:hidden text-main-black text-center absolute grid grid-cols justify-center top-0 w-full h-[300px] bg-white left-0 z-20 shadow-xl rounded-b-xl`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat font-bold hover:text-main-purple leading-normal text-2xl text-main-black"
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Contact Us for Mobile */}
          <li>
            <a
              href="/"
              className="bg-white border-coral-red border-2 rounded-full px-6 py-3 -mt-4 text-main-purple text-lg leading-normal font-bold font-montserrat"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* Desktop Navigation */}
        <ul className="hidden xl:flex justify-center items-center gap-12 text-main-black">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat font-bold hover:text-main-purple leading-normal text-2xl text-main-black"
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Contact Us for Desktop */}
          <li>
            <a
              href="/"
              className="bg-white border-coral-red border-2 rounded-full px-6 py-3 text-main-purple hover:inner-border-2 hover:inner-border-main-purple flex text-lg leading-normal font-bold font-montserrat max-xl:hidden wide:mr-8 transition-all"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
