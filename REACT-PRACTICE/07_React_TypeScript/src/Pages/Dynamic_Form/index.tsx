import { useRef } from 'react';
import Form, { type FormHandle } from './components/Form';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import { useNavigate } from 'react-router';

export default function DynamicForm() {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const customeForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customeForm.current?.clear();
  }
  return (
    <>
      <button onClick={() => navigate('/')} className="backButton">
        ← Back
      </button>
      <div>
        <div>
          <Input id="name" label="Your name" type="text" ref={inputRef} />
          <Input id="age" label="Your age" type="number" />
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '30px',
              justifyContent: 'center',
              paddingBottom: '30px',
              borderBottom: '1px solid black',
            }}
          >
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
          </div>
        </div>
        <div>
          <Form onSave={handleSave} ref={customeForm}>
            <Input id="name" label="Your name" type="text" />
            <Input id="age" label="Your age" type="number" />
            <p>
              <Button el="button" className="button">
                Button
              </Button>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}
