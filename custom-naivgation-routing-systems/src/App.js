import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Hola Espanol!
        </Button>
      </div>
      <div>
        <Button danger>Bonjour monde!</Button>
      </div>
      <div>
        <Button warning outline>
          Hallo Welt!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Halo Dunia!
        </Button>
      </div>
      <div>
        <Button primary>Salamu Dunia!</Button>
      </div>
    </div>
  );
}

export default App;
