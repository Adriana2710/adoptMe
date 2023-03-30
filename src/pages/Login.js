import Form from "../components/Form"
import Button from '../components/Button'
import Label from '../components/Label'
import Input from '../components/Input'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <Form>
                <h2>Log in page for Admin:</h2>
                <div className="form-group">
                    <Label htmlFor="email">E-mail:</Label>
                    <Input type="email" id="email" name="email" required={true} placeholder="Insert your email address"/>
                </div>
                <div className="form-group">
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" id="password" name="password" required={true} placeholder="Insert your password"/>
                </div>
                <Button><Link to="/admin/pets" className='links'>Log In</Link></Button>
            </Form>
        </div>
    )
}

export default Login