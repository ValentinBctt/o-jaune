import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RevealBot } from './Reveal';
import { ScrambleText } from "./Reveal";
export function Contact() {

  const title = ["Contact"];
  return (

    <RevealBot>
    <div className="contact">
      <h2><ScrambleText texts={title} as="h2" className="titles text-center" /></h2>
      <ul>
        <li>
          <a href="https://www.instagram.com/_ojaune_/">
            <FontAwesomeIcon icon={faInstagram} /> @_ojaune_
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/people/O-Jaune">
            <FontAwesomeIcon icon={faFacebook} /> O-Jaune
          </a>
        </li>
        <li>
          <a href="mailto:ojaune.contact@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> ojaune.contact@gmail.com
          </a>
        </li>
      </ul>
    </div>
    </RevealBot>
  );
}
