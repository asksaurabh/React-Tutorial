import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID khxqBt4TJk9qizuP4VwXBpiHpHid33zlFToW5F1AdxY',
    },
    params: {
      query: 'cars',
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
