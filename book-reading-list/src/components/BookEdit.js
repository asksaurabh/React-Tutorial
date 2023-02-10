import { useState } from 'react';

function BookEdit({ book, onEdit }) {
  const [bookTitle, setBookTitle] = useState(book.bookTitle);

  const onSave = (event) => {
    event.preventDefault();
    onEdit(book.bookID, bookTitle);
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
