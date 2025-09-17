// components/ui/Modal.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ children }) => {
  const navigate = useNavigate();

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const closeModal = () => {
    navigate(-1); // Go back in history
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content " onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;