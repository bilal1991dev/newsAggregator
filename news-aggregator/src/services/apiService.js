import axios from 'axios';
import { BASE_URL } from '../utils';

// NewsAPI
const fetchFromNewsAPI = async () => {
    try {
      const response = await axios.get(BASE_URL);
      if(response.status === 200) {
          console.log(response, 'this is ');  // Assuming the articles are returned in response.data.articles
          return response;
      }
    } catch (error) {
      console.error('Error fetching from NewsAPI:', error);
      return [];
    }
  };

  export { fetchFromNewsAPI };