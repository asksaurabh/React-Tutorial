import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input value={searchTerm} onChange={onInputChange} />
      </form>
    </div>
  );
}

export default SearchBar;
