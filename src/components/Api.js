import axios from 'axios';
const API_KEY = '38199946-75d864e4ac94246fbd605ac6b'
const BASE_URL = 'https://pixabay.com/api/'

export async function getGallery({ query, page }) {
  const param = new URLSearchParams({
    key: `${API_KEY}`,
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${page}`,
  });
  try {
    const response = await axios.get(`${BASE_URL}?${param}`);

    return response.data.hits;
  } catch (error) {
    console.error(error);

    return [];
  }
}