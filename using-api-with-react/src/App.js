import SearchBar from './components/SearchBar';
import getImages from './unsplash-api';

function App() {
  const onUserSubmit = async (searchTerm) => {
    const searchedImages = await getImages(searchTerm);
    console.log(searchedImages);
  };

  return (
    <div>
      <SearchBar onSubmit={onUserSubmit} />
    </div>
  );
}

export default App;
