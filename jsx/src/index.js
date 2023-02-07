/* eslint-disable no-unused-vars */
// Five step process to create and show a React component.
// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Get the reference to the div with ID 'root'
const el = document.getElementById('root');

// 3. Tell React to take control of that element.
const root = ReactDOM.createRoot(el);

// 4. Create a component.
function App() {
  let greetMessage = 'Hello React World!';
  if (Math.random() < 0.5) {
    greetMessage = 'Bye React World!';
  }

  // Don't try to show any other data type except strings and numbers on the screen.
  return <h1>{greetMessage}</h1>;
}

// 5. Show the component on the screen.
root.render(<App />);
