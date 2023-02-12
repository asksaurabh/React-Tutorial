import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
  const { createBook } = useBooksContext();
  const [bookTitle, setBookTitle] = useState('');

  const onBookSubmit = (event) => {
    event.preventDefault();
    createBook(bookTitle);
    setBookTitle('');
  };

  const onBookTitleChange = (event) => {
    setBookTitle(event.target.value);
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={onBookSubmit}>
        <label>Title</label>
        <input
          className='input'
          value={bookTitle}
          onChange={onBookTitleChange}
        />
        <button className='button'>Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
