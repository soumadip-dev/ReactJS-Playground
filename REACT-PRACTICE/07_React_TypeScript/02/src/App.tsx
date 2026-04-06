import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';
import { useRef } from 'react';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id="name" label="Your name" type="text" ref={inputRef} />
      <Input id="age" label="Your age" type="number" />
      <p>
        <Button el="button" className="button">
          Button
        </Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com" className="button">
          Anchor
        </Button>
      </p>
      <Container as={'button'} className="button">
        Click Me
      </Container>
    </main>
  );
}

export default App;
