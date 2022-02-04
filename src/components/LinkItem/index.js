import './link-item.css';

import { FiX, FiClipboard } from 'react-icons/fi';

function LinkItem({ closeModal, content }) {
    async function copylink() {
        await navigator.clipboard.writeText(content.link);
        alert('copiuu');
    }

    return (
        <div className="modal-container">
            <div className="modal-header">
                <h2>Link Encurtado</h2>

                <button onClick={closeModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>{content.long_url}</span>

            <button className="modal-link" onClick={copylink}>
                {content.link}
                <FiClipboard size={20} color="#fff" />
            </button>
        </div>
    );
}

export default LinkItem;
