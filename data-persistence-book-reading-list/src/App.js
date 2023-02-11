/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (bookTitle) => {
    const response = await axios.post('http://localhost:3001/books', {
      bookTitle,
    });

    const updatedBooks = [...books, response.data];
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
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
