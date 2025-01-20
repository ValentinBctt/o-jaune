import { Reveal } from "./Reveal";
import { ScrambleText } from "./Reveal";

export function Event() {
  const title = ["Prochain Event"];

  return (
    <>
      <div className="event">
        <div className="flex justify-center items-start">
          <h2><ScrambleText texts={title} as="h2" className="titles text-center" /></h2>
        </div>
        <Reveal>
          <div className="event-content">
            <div className="video-affiche">
              <video autoPlay muted loop>
                <source src="./assets/affiche1.mp4" type="video/mp4" /> 
              </video>
            </div>
            <div className="affiche-content">
              <h3>Distorsion 3</h3>
              <p>
                La soirée Hip-Hop incontournable à Bordeaux 🎤🔥 Préparez-vous à vivre une nuit explosive au cœur de Bordeaux ! Distorsion, c’est la soirée qui rassemble les passionnés de Hip-Hop, mêlant vibes underground, rythmes puissants et talents locaux. Au programme : des DJ sets enflammés, des performances live inoubliables et une ambiance électrique. 🎶✨
                <br />
                <br />
                📅 Quand : [Indiquez la date]
                <br />
                📍 Où : [Nom de la salle/Adresse]
                <br />
                🎟️ Entrée : [Prix ou mention "entrée libre"]
                <br />
                <br />
                Ne manquez pas cet événement qui célèbre la culture urbaine dans toute sa splendeur. Venez vibrer, danser et laisser Distorsion vous emporter ! 🌟
              </p>
            </div>
            <a href="https://shotgun.live/fr/events/distorsion-3" target="_blank" rel="noreferrer">
              Prends tes places
            </a>
          </div>
        </Reveal>
      </div>
    </>
  );
}
