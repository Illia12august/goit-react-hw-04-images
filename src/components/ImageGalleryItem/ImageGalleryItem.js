import React, { useState } from 'react';
// import { ImageModal } from 'components/Modal/Modal';

import { ImageModal } from 'components/Modal/Modal';
import { GalleryItem, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <GalleryItem>
      <ImageItem onClick={openModal} src={webformatURL} alt={tags} />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        tags={tags}
        largeImageURL={largeImageURL}
      />
    </GalleryItem>
  );
};
