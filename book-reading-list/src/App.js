/* eslint-disable no-unused-vars */
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (bookTitle) => {
    const updatedBooks = [
      ...books,
      {
        bookID: Math.floor(Math.random() * 9999) + 1,
        bookTitle,
      },
    ];
    setBooks(updatedBooks);
  };

  const renderedBooks = books.map((book, index) => {
    return (
      <div key={index}>
        {book.bookID} : {book.bookTitle}
      </div>
    );
  });

  return (
    <div>
      <BookCreate onCreate={createBook} />
      <div>{renderedBooks}</div>
    </div>
  );
}

export default App;
