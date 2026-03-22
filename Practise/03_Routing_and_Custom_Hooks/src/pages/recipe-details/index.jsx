import { useParams } from 'react-router';

export default function RecipeDetails() {
  const { id } = useParams();

  return (
    <div>
      Recipe Details Page for the recipe number <span>{id}</span>
    </div>
  );
}
