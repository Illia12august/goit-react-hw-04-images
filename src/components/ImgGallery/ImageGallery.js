import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageList } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
    <StyledImageList>
      {images.map(item => {
        return <ImageGalleryItem key={item.id} {...item} />;
      })}
    </StyledImageList>
  );
};
