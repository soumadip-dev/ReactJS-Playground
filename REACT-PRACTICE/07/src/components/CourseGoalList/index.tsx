import type { CourseGoal as CourseGoalType } from '../../App';
import CourseGoal from '../CourseGoal';

interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map(goal => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} onDelte={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
