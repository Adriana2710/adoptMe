import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from "../../../components/Button";
import Dialog from '../../../components/Dialog';
import './listPets.css'



const ListPets = () => {

    const [pets, setPets] = useState([]);
    const [message, setMessage] = useState(null);
    const [dialog, setDialog] = useState({
        message: '',    
        isOpen:false,
        deleteYes: null
    });

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/pets")
            return await response.json();
        }

        fetchData().then((petsJson) => {
            setPets(petsJson)         
        })
    }, [])

    //Delete button open a dialog box
    const onDelete = (idPet) => {
        setDialog({
            message:'Are you sure you want to delete?',
            isOpen: true,
            deleteYes: () => deletePet(idPet)

        });
    }

    //Clicking on "NO" button will hide the dialog
    const onCancel = () => {
        setDialog({
            isOpen: false
        })
    }

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
            setDialog({
                isOpen: false
            })
        })

    }

    return (
        <div className='container'>
            {message && <p className='message success error'>{message}</p>}
            <h2>Pet's List</h2>
            
            <Button><Link to="/admin/pets/add" className='links'>Add Pet's Page</Link></Button>
            <table className='list'>
                <thead>
                    <tr>  
                        <th>Image</th>       
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {pets.map(pet =>
                    <tr key={pet._id}>
                        <td className='list__fit'><img className='list__image' src={`http://localhost:3001/${pet.image}`} alt={pet.name} /></td>
                        <td>{pet.name}</td>
                        <td>{pet.gender}</td>
                        <td>{pet.age}</td>
                        <td className='list__options'>
                            <Button><Link to={`/admin/pets/edit/${pet._id}`} className='links'>Edit</Link></Button>
                            <Button onClick={() => onDelete(pet._id)}>Delete</Button>
                        </td>
                    </tr>
                )}
                </tbody>
                              
            </table>
            { dialog.isOpen && <Dialog message={dialog.message} onCancel={onCancel} deleteYes={dialog.deleteYes}/>}
        </div>
    )
}

export default ListPets