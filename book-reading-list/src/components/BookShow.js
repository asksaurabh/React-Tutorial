import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const onDeleteClick = () => {
    onDelete(book.bookID);
  };

  const onEditClick = () => {
    setShowEdit(!showEdit);
  };

  const onBookUpdate = (bookID, newBookTitle) => {
    setShowEdit(false);
    onEdit(bookID, newBookTitle);
  };

  let content = <h3>{book.bookTitle}</h3>;
  if (showEdit === true) {
    content = <BookEdit book={book} onBookUpdate={onBookUpdate} />;
  }

  return (
    <div className='book-show'>
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
