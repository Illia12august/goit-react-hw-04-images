import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getGallery } from './Api';
import { ImageGallery } from './ImgGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    hasMoreImages: true,
  }
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.loadImages();
    }
  }
  anotherQuery = newQuery => {
    this.setState({
      searchQuery: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
      hasMoreImages: true,
    });
  };
  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  getImages = async () => {
    const { query, page } = this.state;
    const actualQuery = query.split('/')[1];

    this.setState({ isLoading: true });

    const newImages = await getGallery({ query: actualQuery, page });

    this.setState(prevState => ({
      images: [...prevState.images, ...newImages],
      hasMoreImages: newImages.length >= 20,
      isLoading: false,
    }));
  };
  render() {
    const { images } = this.state
    return (
      <>
        <Searchbar></Searchbar>
        <ImageGallery images={images} />
      </>
    );
  }
}
