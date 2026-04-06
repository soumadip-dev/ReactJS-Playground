import type { FC, PropsWithChildren } from 'react';

// interface CourseGoalProps {
//   title: string;
//   children: react.ReactNode;
// }

// Another way  :
type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelte: (id: number) => void;
}>;
// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// Another way
const CourseGoal: FC<CourseGoalProps> = ({ title, id, onDelte, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelte(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
