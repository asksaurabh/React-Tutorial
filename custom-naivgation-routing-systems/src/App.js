import Button from './Button';
import { GoBell, GoDesktopDownload, GoDatabase } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button success outline>
          <GoBell />
          Hola Espanol!
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <GoDesktopDownload />
          Bonjour monde!
        </Button>
      </div>
      <div>
        <Button warning>Hallo Welt!</Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoDatabase />
          Halo Dunia!
        </Button>
      </div>
      <div>
        <Button primary outline>
          Salamu Dunia!
        </Button>
      </div>
    </div>
  );
}

export default App;
