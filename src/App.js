import "./App.css";
import React from 'react';
import { Navbar } from './Navbar';
import { OJaune } from './OJaune';
import { Event } from './Event';
import { NosSoirees } from './NosSoirees';
import { Contact } from './Contact';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <section id="o-jaune">
        <OJaune />
      </section>
      <section id="prochain-event">
        <Event />
      </section>
      <section id="nos-soirees">
        <NosSoirees />
      </section>
      <section id="artistes">
        {/* Ajoutez votre composant Artistes ici */}
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
