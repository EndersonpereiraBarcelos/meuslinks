import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './menu.css';

function Menu() {
    return (
        <div className="menu">
            <a className="social" href="https://instagram.com/pbenderson">
                <BsInstagram size={24} color="#fff" />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    );
}

export default Menu;
