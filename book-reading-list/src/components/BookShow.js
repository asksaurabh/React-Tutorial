import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const onBookDelete = () => {
    onDelete(book.bookID);
  };

  const onBookEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.bookTitle}</h3>;
  if (showEdit === true) {
    content = <BookEdit book={book} onEdit={onEdit} />;
  }

  return (
    <div className='book-show'>
      <div>{content}</div>

      <div className='actions'>
        <button className='edit' onClick={onBookEdit}>
          Edit
        </button>
        <button className='delete' onClick={onBookDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
