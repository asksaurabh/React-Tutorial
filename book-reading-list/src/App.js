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

  const deleteBookById = (bookID) => {
    const updateBooks = books.filter((book) => {
      return book.bookID !== bookID;
    });

    setBooks(updateBooks);
  };

  const editBookById = (bookID, newBookTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.bookID === bookID) {
        return { ...book, bookTitle: newBookTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
