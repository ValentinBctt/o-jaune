import { ScrambleText } from "./Reveal";

export function Navbar() {
  const handleScroll = (event, id) => {
    event.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <ul>
        <li><a href="#o-jaune" onClick={(e) => handleScroll(e, '#o-jaune')}>O-Jaune</a></li>
        <li><a href="#prochain-event" onClick={(e) => handleScroll(e, '#prochain-event')}>Prochain Event</a></li>
        <li><a href="#nos-soirees" onClick={(e) => handleScroll(e, '#nos-soirees')}>Nos soirées</a></li>
        <li><a href="#artistes" onClick={(e) => handleScroll(e, '#artistes')}>Artistes</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
      </ul>
    </div>
  );
}
