import distortion3Images from './utils/importImages';
import { useState } from 'react';
import { RevealImages } from './Reveal';

const soirées = [
  {
    id: 1,
    title: "Distorion #3",
    artistes: "Kendrick Lamar, Drake, Travis Scott",
    affiches: { 'affiche-d3.jpg': './assets/affiches/affiche-d3.jpg' },
    photos: Object.values(distortion3Images)
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

  return (
    <div>
      <div className="nos-soirees">
        <h2>Nos Soirées</h2>
        <div className="soirees">
          <div className="soiree-list">
            <ul>
              {soirées.map(soiree => (
                <div className='soiree' key={soiree.id} onClick={() => handleSelectSoiree(soiree)}>
                  <li key={soiree.id}>
                    <h4>{soiree.title}</h4>
                    {Object.keys(soiree.affiches).map((key, index) => (
                      <img key={index} src={soiree.affiches[key]} alt={soiree.title} className='affiche-d' />
                    ))}
                    <p>{soiree.artistes}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <div className="selected-soiree-photos">
            <RevealImages images={selectedSoiree.photos} />
          </div>
        </div>
      </div>
    </div>
  );
}
