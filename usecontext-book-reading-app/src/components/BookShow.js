import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const onDeleteClick = () => {
    deleteBookById(book.id);
  };

  const onEditClick = () => {
    setShowEdit(!showEdit);
  };

  const onBookUpdate = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.bookTitle}</h3>;
  if (showEdit === true) {
    content = <BookEdit book={book} onBookUpdate={onBookUpdate} />;
  }

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.bookID}/200`} />
      <div>{content}</div>

      <div className='actions'>
        <button className='edit' onClick={onEditClick}>
          Edit
        </button>
        <button className='delete' onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
