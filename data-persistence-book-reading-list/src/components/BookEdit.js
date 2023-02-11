import { useState } from 'react';

function BookEdit({ book, onBookUpdate }) {
  const [bookTitle, setBookTitle] = useState(book.bookTitle);

  const onSave = (event) => {
    event.preventDefault();
    onBookUpdate(book.id, bookTitle);
  };

  const onBookTitleChange = (event) => {
    setBookTitle(event.target.value);
  };

  return (
    <div>
      <h3>Edit book</h3>

      <form onSubmit={onSave} className='book-edit'>
        <label>Title</label>
        <input
          value={bookTitle}
          className='input'
          onChange={onBookTitleChange}
        />

        <button className='button is-primary'>Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
