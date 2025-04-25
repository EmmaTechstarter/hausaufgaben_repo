import { useState } from "react";
import { Link } from "react-router-dom"

function Tierkarte (props) {
    function deleteAnimal (id){
        fetch(`http://localhost:5005/tiere/${id}`, {method:"DELETE"})
        window.location.reload()
    }
    return (
        <div><Link style={{textDecoration: "none"}}to={`/tiere/${props.id}`}>
        <div>
            <h2>Name: {props.Name}</h2>
            <p>Tierart: {props.Tierart}</p>
        </div></Link>
            <button onClick={() => {deleteAnimal(props.id)}}>
                Löschen
            </button>
            <Link to={`/${props.id}`}>
                Bearbeiten
            </Link>
        </div>
    )
}

export default Tierkarte