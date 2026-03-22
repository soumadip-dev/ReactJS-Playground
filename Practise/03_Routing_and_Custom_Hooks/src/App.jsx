import { Route, Routes } from 'react-router';
import './App.css';
import CommentList from './pages/comments';
import RecipeList from './pages/recipes';
import RecipeDetails from './pages/recipe-details';
import NotFound from './pages/not-found';
import Layout from './components/layout';

export default function App() {
  return (
    <div>
      <h1>React Routing, Custom Hooks, and More</h1>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="comments" element={<CommentList />} />
          <Route path="recipes" element={<RecipeList />} />
          <Route path="recipes/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
