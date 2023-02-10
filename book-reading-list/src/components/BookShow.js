function BookShow({ book }) {
  return (
    <div className='book-show'>
      {book.bookID} : {book.bookTitle}
    </div>
  );
}

export default BookShow;
