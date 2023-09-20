import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Loader } from 'components/Loader/Loader';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    maxWidth: '90vw',
    maxHeight: '80vh',
    overflow: 'hidden',
    background: 'transparent',
    borderRadius: '30px',
  },
  overlay: {
    backgroundColor: '#cffcf2',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onRequestClose, tags, largeImageURL }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <Modal
    styles={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <img src={largeImageURL} alt={tags} onLoad={handleImageLoad} />
      {!imageLoaded && <Loader />}
      {imageLoaded && (
        <div>
          <p>{tags}</p>
          <button onClick={onRequestClose}>close</button>
        </div>
      )}
    </Modal>
  );
};
