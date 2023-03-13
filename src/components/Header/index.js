import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return(
        <header className='header'>
            <div className='container'>
                <img className='logo' src='/images/logos/adoptme_logo1.jpg' alt='AdoptMe Logo' />
                <nav className='navBar'>
                    <ul>
                        <li>
                            <Link to="/" className='links'>Home</Link>
                        </li>
                        <li>
                            <Link to="/adoption" className='links'>Adoption</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='links'>Contact</Link>
                        </li>
                        <li>
                            <Link to="/admin/pets" className='links'>Admin Pets</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header