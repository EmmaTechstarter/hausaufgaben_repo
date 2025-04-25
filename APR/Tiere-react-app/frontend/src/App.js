import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Tierkarte from './Tierkarte';

function App() {
  const [tiere, setTiere] = useState(null)
  async function GetTiere () {
   const res = await fetch("http://localhost:5005/tiere")
    const data = await res.json()
    setTiere (data)
  }
  useEffect(() => {GetTiere()}, []) 
  if (!tiere) {
    return <p>Laden...</p>
  }
  return (
  <div>
    <h1>Hallo, hier sehen Sie Tiere c:</h1>
    <div id="tiere">
      {tiere.map((a) => (<Tierkarte Name={a.name} Tierart={a.tierart} key={a.id} id={a.id}/>))}
    </div>
  </div>
  );
}

export default App;
