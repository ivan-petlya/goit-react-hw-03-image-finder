import axios from 'axios';

const KEY = '30520048-83f00ec653ef23d160364c39b';
const BASE_URL = 'https://pixabay.com/api';

async function fetchPictures(query, page) {
  const url = `${BASE_URL}/?key=${KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;

  const { data } = await axios.get(url);

  return data;
}

export default fetchPictures;
