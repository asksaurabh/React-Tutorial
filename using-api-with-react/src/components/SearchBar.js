function SearchBar({ onSubmit }) {
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit('carsssss');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' />
      </form>
    </div>
  );
}

export default SearchBar;
