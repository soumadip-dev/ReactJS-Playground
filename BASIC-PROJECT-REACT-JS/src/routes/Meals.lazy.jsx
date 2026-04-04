import { createLazyFileRoute } from '@tanstack/react-router';
import useRefetchableFetch from '../hooks/useRefetchableFetch';
import { ShimmerPostItem } from 'react-shimmer-effects';

export const Route = createLazyFileRoute('/Meals')({
  component: RouteComponent,
  defaultPreload: 'Intent',
});

function RouteComponent() {
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';
  const { data, error, loading } = useRefetchableFetch(url, 10);

  if (loading) {
    // Render multiple shimmer cards to mimic the final UI
    return (
      <div style={containerStyle}>
        {[...Array(6)].map((_, idx) => (
          <div key={idx} style={cardStyle}>
            <ShimmerPostItem card title cta />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;
  }

  if (!data?.meals?.length) {
    return <p style={{ textAlign: 'center' }}>No meals found.</p>;
  }

  return (
    <div style={containerStyle}>
      {data.meals.map(({ strMeal, strMealThumb, idMeal }) => (
        <article key={idMeal} style={cardStyle}>
          <img src={strMealThumb} alt={strMeal || 'Meal image'} style={imageStyle} />
          <div style={contentStyle}>
            <h3 style={mealNameStyle}>{strMeal}</h3>
            <span style={mealIdStyle}>#{idMeal}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  padding: '40px',
  backgroundColor: '#f8f9fa',
  fontFamily: 'Arial, sans-serif',
  minHeight: '70vh',
};

const cardStyle = {
  width: '250px',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  transition: 'transform 0.2s ease',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const contentStyle = {
  padding: '16px',
  textAlign: 'center',
};

const mealNameStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
  color: '#333',
};

const mealIdStyle = {
  fontSize: '14px',
  color: '#666',
};
