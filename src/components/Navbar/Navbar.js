import react from 'react';
import './Navbar.css';
import Logo from './dollar.png'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar__Brand">
                <img src={ Logo }/>
            </div>
        </div>
    )
}

export default Navbar;