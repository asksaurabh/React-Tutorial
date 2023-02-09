import SearchBar from './components/SearchBar';

function App() {
  const onUserSubmit = (searchTerm) => {
    console.log('Do a search with', searchTerm);
  };

  return (
    <div>
      <SearchBar onSubmit={onUserSubmit} />
    </div>
  );
}

export default App;
