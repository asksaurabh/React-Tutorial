import { useState } from 'react';
import './SearchBar.css';

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
    <div className='search-bar'>
      <form onSubmit={onFormSubmit}>
        <label>Enter Search Term</label>
        <input value={searchTerm} onChange={onInputChange} />
      </form>
    </div>
  );
}

export default SearchBar;
