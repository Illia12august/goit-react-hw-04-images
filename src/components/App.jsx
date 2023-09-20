import React, { useState, useEffect, useCallback } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './LoadMoreButton/Button';
import { ImageGallery } from './ImgGallery/ImageGallery';
import { getGallery } from './Api';
import { Loader } from './Loader/Loader';
const SCROLL_OFFSET = 1000;
const IMAGES_PER_PAGE = 20;
export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [prevQuery, setPrevQuery] = useState('');
  const [prevPage, setPrevPage] = useState(1);
  const [error, setError] = useState(null);

  // componentDidMount() {
  //   window.addEventListener('scroll', this.checkScrollPosition);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { query, page } = this.state;
  //   if (prevState.query !== query || prevState.page !== page) {
  //     this.loadImages();
  //   }
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.checkScrollPosition);
  // }
  
  const checkScrollPosition = useCallback(() => {
    if (typeof window !== 'undefined') {
      const offset = window.scrollY || 0;

      if (offset > SCROLL_OFFSET && !showScrollBtn) {
        setShowScrollBtn(true);
      } else if (offset <= SCROLL_OFFSET && showScrollBtn) {
        setShowScrollBtn(false);
      }
    }
  }, [showScrollBtn]);
  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
    setHasMoreImages(true);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };


  const loadImages = async ({ query, page }) => {
    const actualQuery = query.split('/')[1];
    setIsLoading(true);
    setError(null);

    try {
      const newImages = await getGallery({ query: actualQuery, page });
      setImages(prev => [...prev, ...newImages]);
      setHasMoreImages(newImages.length >= IMAGES_PER_PAGE);
    } catch (error) {
      setError('Failed to load images. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (prevQuery !== query || prevPage !== page) {
      setPrevQuery(query);
      setPrevPage(page);
      loadImages({ query, page });
    }
  }, [query, page, prevQuery, prevPage]);


  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, [checkScrollPosition]);
  return (
    <div>
      <Searchbar onSubmit={changeQuery} />
      <ImageGallery images={images} />
      {images.length > 0 && hasMoreImages && (
        <Button onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};
