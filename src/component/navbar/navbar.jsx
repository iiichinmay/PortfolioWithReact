import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "service", "project", "contact", "faq"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
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
      className="flex justify-between items-center bg-black text-white py-3 px-8 sticky top-0 w-full"
      style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)", zIndex: 1000 }}
    >
      <img src="./images/logo.png" alt="logo" className="h-10" />

      <ul className="flex text-xl space-x-8">
        {["about", "service", "project", "contact", "faq"].map((section) => (
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
    </nav>
  );
};

export default Navbar;
