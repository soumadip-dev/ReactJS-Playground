import type { ReactNode } from 'react';
import type { CourseGoal as CourseGoalType } from '../../App';
import CourseGoal from '../CourseGoal';
import InfoBox from '../InfoBox';

interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">No goals found. Maybe add one?</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You reached your limit!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelte={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
