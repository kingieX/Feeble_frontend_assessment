import { useState } from "react";
import Logo from "../assets/logo.png";

const navLinks = ["How it Works", "Pricing", "Use Case", "FAQ"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full pt-6">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className={`flex flex-col bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out ${
            isOpen ? "rounded-3xl" : "rounded-full"
          }`}
        >
          <div className="flex items-center justify-between px-8 py-3 w-full">
            {/* Logo */}
            <div className="text-lg font-semibold text-text">
              <img src={Logo} alt="Coup Logo" className="h-6 w-auto" />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-nav transition-colors duration-200 hover:text-text"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <CTAButton />
            </div>

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center md:hidden w-8 h-8 space-y-1.5 focus:outline-none"
            >
              <span
                className={`block h-0.5 w-6 bg-text transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-text transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-text transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col items-center gap-6 pb-8 pt-4 border-t border-gray-100/50">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-nav font-medium hover:text-text"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="w-full flex justify-center px-8">
                <CTAButton />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const CTAButton = () => (
  <button className="group relative overflow-hidden rounded-full border border-primary px-5 py-2 text-sm font-normal text-white w-full md:w-auto">
    <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
    <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-primary">
      Contact Sales
    </span>
    <span className="absolute inset-0 bg-primary transition-transform duration-300 ease-out group-hover:-translate-x-full" />
  </button>
);

export default Navbar;
