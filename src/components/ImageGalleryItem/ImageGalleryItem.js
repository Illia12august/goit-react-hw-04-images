import React, { Component } from 'react';
// import { ImageModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags, largeImageURL } = this.props
    return (
      <div class="overlay">
        <div class="modal">
          <img src={webformatURL} alt={tags} />
        </div>
      </div>
    );
  }
}
