/* eslint-disable no-unused-vars */
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [bookID, setBookID] = useState(1);
  const [books, setBooks] = useState([]);

  const createBook = (bookTitle) => {
    const updatedBooks = [...books, { bookID, bookTitle }];
    setBooks(updatedBooks);
    setBookID(bookID + 1);
  };

  const renderedBooks = books.map((book, index) => {
    return (
      <li key={index}>
        {book.bookID} : {book.bookTitle}
      </li>
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
