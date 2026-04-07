import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import { useRef, useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal/ReactHookFormWithZod';
import Input from './components/Forms/Input';
import Button from './components/Forms/Button';
import Container from './components/Forms/Container';
import Form, { type FormHandle } from './components/Forms/Form';

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string): void {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handledeleteGoal(id: number): void {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }

  // For Form
  const inputRef = useRef<HTMLInputElement>(null);

  const customeForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customeForm.current?.clear();
  }

  return (
    <main>
      {/* Goal Tracker project */}
      <div>
        <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goals={goals} onDeleteGoal={handledeleteGoal} />
      </div>
      <div>
        <div>
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
    </main>
  );
}
