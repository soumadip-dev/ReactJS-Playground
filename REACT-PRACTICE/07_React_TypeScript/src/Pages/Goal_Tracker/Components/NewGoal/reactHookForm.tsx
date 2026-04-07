import { useForm, type SubmitHandler } from 'react-hook-form';

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
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    onAddGoal(data.goal, data.summary);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input
          type="text"
          id="goal"
          {...register('goal', {
            required: 'Goal cannot be empty',
            minLength: {
              value: 5,
              message: 'Goal must be at least 5 characters',
            },
          })}
        />
        {errors.goal && <span>{errors.goal.message}</span>}
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input
          type="text"
          id="summary"
          {...register('summary', {
            required: 'Summary cannot be empty',
            minLength: {
              value: 5,
              message: 'Summary must be at least 5 characters',
            },
          })}
        />
        {errors.summary && <span>{errors.summary.message}</span>}
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
