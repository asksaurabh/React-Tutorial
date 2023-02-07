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
  const inputType = 'number';
  return <input type={inputType} min={5} max={100} step={15} />;
}

// 5. Show the component on the screen.
root.render(<App />);
