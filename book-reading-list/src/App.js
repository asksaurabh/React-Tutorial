/* eslint-disable no-unused-vars */
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

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

  return (
    <div className='app'>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
