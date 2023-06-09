import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from "../../../components/Form"
import Label from "../../../components/Label"
import Input from "../../../components/Input"
import Button from "../../../components/Button"

const EditPet = (props) => {

    const {id} = useParams();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState(null);
    const [image, setImage] = useState('');

    const handleFileSubmit = (e) =>{
        setImage(e.target.files[0])
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3001/pets/${id}`)
            return await response.json();
        }

        fetchData().then((petJson) => {
            setName(petJson.name);
            setGender(petJson.gender);
            setAge(petJson.age);
            setImage(petJson.image)
        })
    }, [id])

    const formSubmit = async (event) => {

        
        event.preventDefault()

        const formData = new FormData();

        formData.append("name", name);
        formData.append("gender", gender);
        formData.append("age", age);
        formData.append("image", image);
        
        const response = await fetch(`http://localhost:3001/pets/${id}`, {
            method: "PUT",
            mode: "cors",
            body: formData
        })

        const json = response.json();
        
        json.then((jsonResponse) => {
            setMessage(jsonResponse.message)
        })
    }

    return (
        <div>
            {message && <p className='message success error'>{message}</p>}
            <Form onSubmit={formSubmit}>
                <h2>Form to edit pet:</h2>
                <div className="form-group">
                    <Label htmlFor="petName">Name:</Label>
                    <Input type="text" id="petName" name="petName" value={name} setState={setName} required={true} placeholder="Insert Pet's name"/>
                </div>
                <div className="form-group">
                    <Label htmlFor="image">Image:</Label>
                    <input type="file" id="image" name="image" onChange={handleFileSubmit} placeholder="Insert your image file"/>
                </div>
                <div className="form-group">
                    <Label htmlFor="gender">Gender:</Label>
                    <Input type="text" id="gender" name="gender" value={gender} setState={setGender} required={true} placeholder="Insert the pet's gender"/>
                </div>
                <div className="form-group">
                    <Label htmlFor="person">Age:</Label>
                    <Input type="number" id="age" name="age" value={age} setState={setAge} required={true} placeholder="Insert the pet's age"/>
                </div>
                <Button>Edit Pet</Button>
            </Form>
            <Button><Link to="/admin/pets" className="links">Go Back to the Pet's list</Link></Button>
        </div>
    )
}

export default EditPet