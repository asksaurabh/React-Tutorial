import axios from 'axios';
import { createContext, useState, useCallback } from 'react';
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const createBook = async (bookTitle) => {
    const response = await axios.post('http://localhost:3001/books', {
      bookTitle,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (bookID) => {
    await axios.delete(`http://localhost:3001/books/${bookID}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== bookID;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (bookID, newBookTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${bookID}`, {
      bookTitle: newBookTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === bookID) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provider };
