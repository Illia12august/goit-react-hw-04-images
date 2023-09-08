import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(item => {
        return <ImageGalleryItem key={item.id} {...item} />;
      })}
    </ul>
  );
};
