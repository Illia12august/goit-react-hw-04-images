import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export  const ImageGallery = ({imageList}) => {
    console.log(imageList)
    return(
        <ul>
            {imageList.map(item => {
                return <ImageGalleryItem key={item.id} {...item}></ImageGalleryItem>
            })}
        </ul>
    )
}