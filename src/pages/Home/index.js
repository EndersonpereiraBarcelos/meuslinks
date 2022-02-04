import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import Menu from '../../components/index';
import LinkItem from '../../components/LinkItem';
import './Home.css';
import api from '../../services/api';

function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function handleClick() {
        try {
            const response = await api.post('/shorten', {
                long_url: link,
            });

            setData(response.data);
            setShowModal(true);
            setLink('');
        } catch {
            alert('Deu error');
            setLink('');
        }
    }

    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" alt="Sujeito Link Logo" />
                <h1>Sujeito Link</h1>
                <span>Cole seu Link para encurtar👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#fff" />
                    <input
                        placeholder="cole seu link aqui.."
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <button onClick={handleClick}>Gerar Link</button>
            </div>

            <Menu />

            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div>
    );
}

export default Home;
