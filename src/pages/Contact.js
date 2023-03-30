import "./contact.css"
import Form from "../components/Form"
import Button from '../components/Button'
import Label from '../components/Label'
import Input from '../components/Input'
import TextArea from "../components/TextArea"


const Contact = () => {
    return (
        <div>
            <Form>
                <h2>Contact Form</h2>
                <h4>Please fill out the following form for any enquiries or to begin the adoption process. We will get back to you as soon as possible.</h4>
                <div className="form-group">
                    <Label htmlFor="fname">Name:</Label>
                    <Input type="text" id="fname" name="fname" required={true} placeholder="Insert your name"/>
                </div>
                <div className="form-group">
                    <Label htmlFor="phone">Phone Number:</Label>
                    <Input type="tel" id="phone" name="phone" required={true} placeholder="Insert your phone number"/>
                </div>
                <div className="form-group">
                    <Label htmlFor="email">Insert your email address:</Label>
                    <Input type="email" id="email" name="email" required={true} placeholder="Insert your email address"/>
                </div>
                <div className="form-group">
                    <Label htmlFor="textArea">Message</Label>
                    <TextArea id="textArea" name="textArea" rows="4" cols="50" placeholder="Insert your message"></TextArea>
                </div>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Contact