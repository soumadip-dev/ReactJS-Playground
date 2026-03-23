import { zodResolver } from '@hookform/resolvers/zod';

import { useForm, type SubmitHandler } from 'react-hook-form';
import formSchema from './formSchema';

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

interface Inputs {
  goal: string;
  summary: string;
}
export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    onAddGoal(data.goal, data.summary);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" {...register('goal')} />
        {errors.goal && <span>{errors.goal.message}</span>}
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" {...register('summary')} />
        {errors.summary && <span>{errors.summary.message}</span>}
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
