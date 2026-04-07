import { useState } from 'react';
import Header from './Components/Header';
import NewGoal from './Components/NewGoal/ReactHookFormWithZod';
import CourseGoalList from './Components/CourseGoalList';
import goalsImg from '../../assets/goals.jpg';
import { useNavigate } from 'react-router';

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function GoalTracker() {
  const navigate = useNavigate();

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

  return (
    <>
      <button onClick={() => navigate('/')} className="backButton">
        ← Back
      </button>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handledeleteGoal} />
    </>
  );
}
