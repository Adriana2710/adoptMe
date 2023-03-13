import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from "../../../components/Button"



const ListPets = () => {

    const [pets, setPets] = useState([]);
    const [message, setMessage] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/pets")
            return await response.json();
        }

        fetchData().then((petsJson) => {
            setPets(petsJson)         
        })
    }, [])


    const deletePet = async (petId) => {
       
        const response = await fetch(`http://localhost:3001/pets/${petId}`, {
            method: "DELETE",
            mode: "cors",
        })

        const json = response.json();
        
        json.then((jsonResponse) => {
            setMessage(jsonResponse.message)
            const petsUpdate = pets.filter((pet) => {
                return pet._id !== petId 
            })
            setPets(petsUpdate)
        })
    }

    return (
        <div>
            {message && <p>{message}</p>}
            <h2>Pet's List</h2>
            
            <Button><Link to="/admin/pets/add" className='links'>Add Pet's Page</Link></Button>
            <table>
                <thead>
                    <tr>         
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {pets.map(pet =>
                    <tr key={pet._id}>
                        <td>{pet.name}</td>
                        <td>{pet.gender}</td>
                        <td>{pet.age}</td>
                        <td>
                            <Button><Link to={`/admin/pets/edit/${pet._id}`} className='links'>Edit</Link></Button>
                            <Button onClick={() => deletePet(pet._id)}>Delete</Button>
                        </td>
                    </tr>
                )}
                </tbody>
                              
            </table>
            
        </div>
    )
}

export default ListPets