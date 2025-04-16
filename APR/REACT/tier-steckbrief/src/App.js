import React from 'react';
import './App.css';

function App() {
  const tiere = [
    { name: 'Thorin', art: 'Hund', krankheit: 'Hüftdysplasie' },
    { name: 'Pippin', art: 'Katze', krankheit: 'Schnupfen' },
    { name: 'Legolas', art: 'Kaninchen', krankheit: 'Zahnerkrankung' }
  ];

  return (
    <div className="app-container">
      <h1 className="titel">Unsere Tiere</h1>

      {tiere.map((tier, index) => (
        <div className="tier-card" key={index}>
          <h2>{tier.name}</h2>
          <p><strong>Art:</strong> {tier.art}</p>
          <p><strong>Krankheit:</strong> {tier.krankheit}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
