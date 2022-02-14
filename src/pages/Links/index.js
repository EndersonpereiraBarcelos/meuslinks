import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Links.css';
import { getLinkSave } from '../../services/storeLink';

function Links() {
    const [myLinks, setMyLinks] = useState([]);

    const [data, setData] = useState({});

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function getLinks() {
            const result = await getLinkSave('@encurtarLink');
            if (result.length === 0) {
                console.log('list vazia');
            }
            setMyLinks(result);
        }

        getLinks();
    }, []);

    return (
        <div className="links-container">
            <div className="links-header">
                <Link to="/">
                    <FiArrowLeft size={38} color="#fff" />
                </Link>
                <h1>Meus Links</h1>
            </div>

            {myLinks.map((Link) => (
                <div key={Link.id} className="links-item">
                    <button className="link">
                        <FiLink size={18} color="#fff" />
                        {Link.long_url}
                    </button>
                    <button className="link-delete">
                        <FiTrash size={24} color="#ff5454" />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Links;
