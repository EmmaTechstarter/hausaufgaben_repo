import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Tieredetail (){
    const [tier, setTier] = useState(null)
    const {id}=useParams()
    async function GetTier () {
     const res = await fetch(`http://localhost:5005/tiere/${id}`)
      const data = await res.json()
      setTier (data) 
    }
    useEffect(() => {GetTier()}, []) 
    if (!tier) {
      return <p>Laden...</p>
    }
    return (
    <div>
      <h1>Hallo, hier sehen Sie Tiere c:</h1>
      <div id="tier">
        <h2>Name: {tier.name}</h2>
        <p>Tierart: {tier.tierart}</p>
        <p>Geburtstag: {tier.geburtstag}</p>
        <p>Krankheit: {tier.krankheit}</p>
        <p>Gewicht: {tier.gewicht}</p>
      </div>
    </div>
    );
}
export default Tieredetail