import { useState } from 'react';
import SearchBar from './components/SearchBar';
import getImages from './unsplash-api';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);

  const onUserSubmit = async (searchTerm) => {
    const searchedImages = await getImages(searchTerm);
    setImages(searchedImages);
  };

  return (
    <div>
      <SearchBar onSubmit={onUserSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
