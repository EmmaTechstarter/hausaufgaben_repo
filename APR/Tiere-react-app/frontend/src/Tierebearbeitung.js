import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
function Tierebearbeitung(){
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
    function changeAnimal(id){
        const addTierForm = document.getElementById("addTierForm")
        const changedAnimal={}
        const inputs = addTierForm.querySelectorAll("input[name]")
    inputs.forEach((input) => {
        changedAnimal[input.name] = input.value
    }) 
    fetch(`http://localhost:5005/tiere/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(changedAnimal)
    }).then(window.location="http://localhost:3000");
    }
    return (
    <div>
        <form id="addTierForm">
        <label>
            Tierart:
            <input type="text" name="tierart" required defaultValue={tier.tierart} />
        </label>
        <label>
            Name:
            <input type="text" name="name" required defaultValue={tier.name} />
        </label>
        <label>
            Krankheit:
            <input type="text" name="krankheit" required defaultValue={tier.krankheit} />
        </label>
        <label>
            Geburtstag:
            <input type="text" name="geburtstag" required defaultValue={tier.geburtstag} />
        </label>
        <label>
            Gewicht:
            <input type="number" name="gewicht" step="0.1" required defaultValue={tier.gewicht} />
        </label>
        <button type="button" onClick={() => {changeAnimal(tier.id)}}>Ändern</button>
    </form>
    </div>
    );
}

export default Tierebearbeitung