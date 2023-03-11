import React, { useState } from 'react';
import './css/SquareImage.css'

const SquareImage = ({ imageUrl, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="square-image">
      <img src={imageUrl} alt={title} onClick={openModal} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src={imageUrl} alt={title} />
            <div className="modal-text">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SquareImage;
