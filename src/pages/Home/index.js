import { FiLink } from 'react-icons/fi';
import Menu from '../../components/index';
import './Home.css';

function Home() {
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
                    <input placeholder="cole seu link aqui.." />
                </div>

                <button>Gerar Link</button>
            </div>

            <Menu />
        </div>
    );
}

export default Home;
