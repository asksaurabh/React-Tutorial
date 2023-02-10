import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [bookTitle, setBookTitle] = useState('');

  const onBookSubmit = (event) => {
    event.preventDefault();
    onCreate(bookTitle);
    setBookTitle('');
  };

  const onBookTitleChange = (event) => {
    setBookTitle(event.target.value);
  };

  return (
    <div>
      <h4>Add a Book</h4>
      <form onSubmit={onBookSubmit}>
        <label>Title</label>
        <input value={bookTitle} onChange={onBookTitleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
