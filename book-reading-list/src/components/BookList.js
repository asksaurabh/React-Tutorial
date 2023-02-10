import BookShow from './BookShow';

function BookList({ books }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.bookID} book={book} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
