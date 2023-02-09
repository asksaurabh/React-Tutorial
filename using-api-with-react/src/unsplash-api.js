import axios from 'axios';

const getImages = async (searchTerm = 'cars') => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID khxqBt4TJk9qizuP4VwXBpiHpHid33zlFToW5F1AdxY',
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default getImages;
