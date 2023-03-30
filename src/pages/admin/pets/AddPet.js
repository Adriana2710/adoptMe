import { useState } from 'react'
import { Link } from 'react-router-dom';
import Form from "../../../components/Form"
import Label from "../../../components/Label"
import Input from "../../../components/Input"
import Button from "../../../components/Button"

const AddPet = () => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState(null);
    const [image, setImage] = useState('')
    
    const handleFileSubmit = (e) =>{
        setImage(e.target.files[0])
    }

    const formSubmit = async (event) => {
        
        event.preventDefault()

        const formData = new FormData();

        formData.append("name", name);
        formData.append("gender", gender);
        formData.append("age", age);
        formData.append("image", image);
        
        const response = await fetch("http://localhost:3001/pets", {
            method: "POST",
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
                <h2>Form to add new pets:</h2>
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
                <Button>Add Pet</Button>
            </Form>
            <Button><Link to="/admin/pets" className="links">Pets: Edit and Delete</Link></Button>
        </div>
    )
}

export default AddPet