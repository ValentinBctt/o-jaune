export function OJaune() {
  return (
    <div>
      <div className="video-background">
        <video autoPlay muted loop>
          <source
            src="./assets/DISTORSION PROPA FILM v2.MOV"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="O-Jaune">
          <h1>O-Jaune</h1>
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
      </div>
    </div>
  );
}
