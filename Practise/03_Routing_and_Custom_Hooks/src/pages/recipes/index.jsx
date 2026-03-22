import { useLocation } from 'react-router';

export default function RecipeList() {
  const location = useLocation();

  return (
    <div>
      <h2>{location.pathname.slice(6)} list page</h2>
    </div>
  );
}
