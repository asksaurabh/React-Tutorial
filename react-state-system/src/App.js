/* eslint-disable no-unused-vars */
import AnimalShow from './AnimalShow';
import { useState } from 'react';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  const index = Math.floor(Math.random() * animals.length);
  return animals[index];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const onButtonClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
