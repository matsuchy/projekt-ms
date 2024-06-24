import axios from 'axios';

const APP_ID = '6bd80464';
const APP_KEY = 'a35724137e6931e3c84a0760e7ff8fd9';

const api = axios.create({
  baseURL: 'https://api.edamam.com/api/recipes/v2',
  params: {
    type: 'public',
    app_id: APP_ID,
    app_key: APP_KEY,
  },
});

export const searchRecipes = async (query) => {
  const response = await api.get('', {
    params: {
      q: query,
    },
  });
  return response.data.hits;
};
