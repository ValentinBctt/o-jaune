import React, { useState } from 'react';
import { ScrambleText } from "./Reveal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (event, id) => {
    event.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const oJaune = ["O-Jaune"];
  const prochainEvent = ["Prochain Event"];
  const nosSoirees = ["Nos soirées"];
  const contact = ["Contact"];

  return (
    <div className="navbar">
      <button className="hamburger" onClick={toggleMenu} behavior="smooth">
        {isOpen ? '✖ Close' : '☰ Menu'}
      </button>
      <ul className={`menu ${isOpen ? 'open' : 'closed'}`} behavior="smooth">
        <li><a href="#o-jaune" onClick={(e) => handleScroll(e, '#o-jaune')}><ScrambleText texts={oJaune} as="h2" className="titles text-center" /></a></li>
        <li><a href="#prochain-event" onClick={(e) => handleScroll(e, '#prochain-event')}><ScrambleText texts={prochainEvent} as="h2" className="titles text-center" /></a></li>
        <li><a href="#nos-soirees" onClick={(e) => handleScroll(e, '#nos-soirees')}><ScrambleText texts={nosSoirees} as="h2" className="titles text-center" /></a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}><ScrambleText texts={contact} as="h2" className="titles text-center" /></a></li>
      </ul>
    </div>
  );
}
