import React, { useState, useEffect} from 'react';
import Cards from "../components/Cards"
import "./adoption.css"

const Adoption = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/pets")
            return await response.json();
        }

        fetchData().then((petsJson) => {
            setPets(petsJson)
           
        })
      
    })

    return (
        <div className="container">
            <h3>Look at all these precious girls & boys:</h3>
            <div className="pets">
                {pets.map(pet =>
                    <Cards
                        key = {pet._id}
                        image = {pet.image}
                        alt = {pet.name}
                        name = {pet.name}
                        gender = {pet.gender}
                        age = {pet.age}
                    />)
                }
            </div>
        </div>
    )
}

export default Adoption