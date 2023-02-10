function BookShow({ book, onDelete }) {
  const onBookDelete = () => {
    onDelete(book.bookID);
  };

  return (
    <div className='book-show'>
      {book.bookID} : {book.bookTitle}
      <div className='actions'>
        <button className='delete' onClick={onBookDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
