import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "service", "project", "technologies", "faq"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="flex justify-between items-center bg-black text-white py-3 px-8 sticky top-0 w-full z-50 shadow-sm nav-shadow"
    >
      <img src="./images/logo.png" alt="logo" className="h-10" />

      <ul className="hidden md:flex text-xl space-x-8">
        {["about", "service", "project", "technologies", "faq"].map((section) => (
          <li
            key={section}
            className={`hover:underline hover:decoration-white transform hover:scale-105 transition duration-200 cursor-pointer ${
              activeSection === section ? "text-yellow-300" : "text-white"
            }`}
          >
            <Link to={section} smooth={true} duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="md:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-8 h-1 bg-white mb-1"></div>
          <div className="w-8 h-1 bg-white mb-1"></div>
          <div className="w-8 h-1 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full h-screen gap-10 right-0 w-[50%]  mob-nav text-white text-center flex flex-col space-y-4 py-4 md:hidden z-40 text-xl">
          {["about", "service", "project", "technologies", "faq"].map(
            (section) => (
              <li
                key={section}
                className={`hover:underline transform hover:scale-105 transition duration-200 cursor-pointer ${
                  activeSection === section ? "text-black-300" : ""
                }`}
                onClick={() => setIsMenuOpen(false)} 
              >
                <Link to={section} smooth={true} duration={500}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
