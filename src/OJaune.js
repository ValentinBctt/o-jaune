import { Reveal } from "./Reveal";
import { ScrambleText } from "./Reveal";

export function OJaune() {

  const title = ["O-Jaune"];


  return (
    <div>
      <div className="video-background">
        <video autoPlay muted loop>
          <source
            src="https://res.cloudinary.com/dnojcwwos/video/upload/v1737365383/DISTORSION_PROPA_FILM_v2_ezs4m1.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Reveal>
        <div className="O-Jaune">
          <h1><ScrambleText texts={title} as="h2" className="titles text-center" /></h1>
          <p>
          Composée d’acteurs de l’évènementiel et du spectacle, tels que producteurs, light designers
          et beatmakers, O-Jaune est une association engagée dans la promotion de la scène musicale
          bordelaise. <br />
          En organisant des soirées et concerts dans des lieux atypiques, elle met à l’honneur
           le hip-hop, la house et l’électro à travers des expériences immersives et originales. <br />

          L’association accompagne également les jeunes artistes en leur offrant une plateforme pour s’exprimer
          et valorise toutes les formes de création artistique, favorisant l’émergence de nouveaux talents.
          Avec audace et passion, O-Jaune contribue au rayonnement culturel de Bordeaux.
                    </p>
        </div>
        </Reveal>
      </div>
    </div>
  );
}
