import "./home.css"
import { Link } from 'react-router-dom';
import Button from "../components/Button"

const Home = () => {
    return(
        <section className="container home">
            <div className="home-1">
                <h1>Welcome to AdoptMe!</h1>
                <p>We are thrilled that you have taken the first step in considering adopting a furry friend. Adopting a pet is not only a rewarding experience but it also saves a life.</p>
                <p>We encourage you to take your time and browse through our available pets. If you see a furry friend that catches your eye, please don't hesitate to contact us to schedule a visit. We look forward to helping you find your new best friend!</p>
                <Button><Link to="/adoption" className="links">Pets Available</Link></Button>
            </div>     
            <div className="home-2">
                <img className="img-home" src="images/ilustration.png" alt="pets illustration"></img>
            </div>      
        </section>    
    )
}

export default Home