/* eslint-disable no-unused-vars */
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (newBookTitle) => {
    console.log('Need to add book with title of ', newBookTitle);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
