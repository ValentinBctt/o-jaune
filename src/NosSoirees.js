
import { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { ScrambleText } from "./Reveal";
import { RevealRight } from "./Reveal";

const distortion3Images = [
  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029454/IMG_2747-2_tliicf.jpg",
  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029433/DSC_2835_rw2kxc.jpg",


  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029421/DSC_2444_yacna2.jpg",
  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029419/IMG_2678_hnqhow.jpg",

  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029431/DSC_2820_vvhv3e.jpg",
  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029430/DSC_2805_gikfeu.jpg",

  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029429/DSC_2760_ekqwx8.jpg",
  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029428/DSC_2738_cg89dn.jpg",

  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029427/DSC_2668_b34inj.jpg",



  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029424/DSC_2577_nqn7u0.jpg",

  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029423/DSC_2526_qz0x30.jpg",
  "https://res.cloudinary.com/dnojcwwos/image/upload/q_40/v1737029419/IMG_2669-2_hfx7i2.jpg",


]

const soirées = [
  {
    id: 1,
    title: "Distorion #3",
    artistes: "Kendrick Lamar, Drake, Travis Scott",
    affiches: { 'affiche-d3.jpg': './assets/affiches/affiche-d3.jpg' },
    photos: distortion3Images,
  },

  {
    id: 2,
    title: "Distorion #2",
    artistes: "Kendrick Lamar, Drake, Travis Scott",
    affiches: { 'affiche-d2.png': './assets/affiches/affiche-d2.png' },
    photos: []
  },
   {
    id: 3,
    title: "Distorion #1",
    artistes: "Kendrick Lamar, Drake, Travis Scott",
    affiches: { 'affiche-d1.png': './assets/affiches/affiche-d1.png' },
    photos: []
  },
];




export function NosSoirees() {
  const [selectedSoiree, setSelectedSoiree] = useState(soirées[0]);

  const handleSelectSoiree = (soiree) => {
    setSelectedSoiree(soiree);
  };

  const [isMouseInPhotoContainer, setIsMouseInPhotoContainer] = useState(false);

  // Gérer le défilement de la page
  const handleWheel = (e) => {
    if (isMouseInPhotoContainer) {
      e.preventDefault(); // Empêcher le défilement vertical de la page
      e.stopPropagation(); // Empêcher la propagation de l'événement de défilement
      e.currentTarget.scrollLeft += e.deltaY; // Effectuer un défilement horizontal
    }
  };

  const handleMouseEnter = () => {
    setIsMouseInPhotoContainer(true);
    document.body.style.overflow = 'hidden'; // Désactive le défilement vertical global
  };

  const handleMouseLeave = () => {
    setIsMouseInPhotoContainer(false);
    document.body.style.overflow = 'auto'; // Rétablit le défilement vertical global
  };

  const title = ["Nos Soirées"];

  return (
    <div className="nos-soirees">
      <h2><ScrambleText texts={title} as="h2" className="titles text-center" /></h2>
      <RevealRight>
      <div className="soirees">
      <div className="soiree-list">
        <AwesomeSlider onTransitionEnd={(event) => handleSelectSoiree(soirées[event.currentIndex])}>
        {soirées.map(soiree => (
          <div className='soiree' key={soiree.id}>
          <h4>{soiree.title}</h4>
          {Object.keys(soiree.affiches).map((key, index) => (
            <img key={index} src={soiree.affiches[key]} alt={soiree.title} className='affiche-d' />
          ))}
          <p>{soiree.artistes}</p>
          </div>
        ))}
        </AwesomeSlider>
      </div>


      <div
        className="selected-soiree-photos"
        style={{
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        overflowY: 'hidden', // Empêche le défilement vertical dans cette zone
        position: 'relative',
        }}
        onWheel={handleWheel}
        onMouseEnter={handleMouseEnter} // Activer le défilement horizontal et désactiver le défilement global
        onMouseLeave={handleMouseLeave} // Désactiver le défilement horizontal et réactiver le défilement global
      >
        {selectedSoiree.photos.map((photo, index) => (
        <div key={index} className="photo-container" style={{ display: 'inline-block', marginTop: '60px', marginBottom: '30px' }}>
          <img
          loading="lazy"
          src={photo}
          alt={`Soiree ${selectedSoiree.title} ${index + 1}`}
          onLoad={(e) => e.target.style.opacity = 1}
          style={{
            opacity: 0,
            transition: 'opacity 0.5s ease-in-out',
            width: '200px',
            height: 'auto',
            marginRight: '10px'
          }}
          />
        </div>
        ))}
      </div>
      </div>
      </RevealRight>
    </div>

    );
}
