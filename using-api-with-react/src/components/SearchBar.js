function SearchBar({ onSubmit }) {
  const onButtonClick = () => {
    onSubmit('cars');
  };

  return (
    <div>
      <input type='text' />
      <button onClick={onButtonClick}>Click Me!</button>
    </div>
  );
}

export default SearchBar;
