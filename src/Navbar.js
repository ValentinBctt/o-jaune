import { ScrambleText } from "./Reveal";

export function Navbar() {
  const handleScroll = (event, id) => {
    event.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  const oJaune = ["O-Jaune"];
  const prochainEvent = ["Prochain Event"];
  const nosSoirees = ["Nos soirées"];
  const artistes = ["Artistes"];
  const contact = ["Contact"];

  return (
    <div className="navbar">
      <ul>
        <li><a href="#o-jaune" onClick={(e) => handleScroll(e, '#o-jaune')}><ScrambleText texts={oJaune} as="h2" className="titles text-center" /></a></li>
        <li><a href="#prochain-event" onClick={(e) => handleScroll(e, '#prochain-event')}><ScrambleText texts={prochainEvent} as="h2" className="titles text-center" /></a></li>
        <li><a href="#nos-soirees" onClick={(e) => handleScroll(e, '#nos-soirees')}><ScrambleText texts={nosSoirees} as="h2" className="titles text-center" /></a></li>
        <li><a href="#artistes" onClick={(e) => handleScroll(e, '#artistes')}><ScrambleText texts={artistes} as="h2" className="titles text-center" /></a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}><ScrambleText texts={contact} as="h2" className="titles text-center" /></a></li>
      </ul>
    </div>
  );
}
