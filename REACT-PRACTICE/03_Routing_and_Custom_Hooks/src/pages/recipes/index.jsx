import { useLocation, useNavigate } from 'react-router';
import useFetch from '../../hooks/use-fetch';

export default function RecipeList() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch('https://dummyjson.com/recipes');

  if (loading) {
    return <div style={loadingStyle}>Loading recipes...</div>;
  }

  if (error) {
    return (
      <div style={errorBox}>
        <h2>Error loading recipes</h2>
        <p>{error}</p>
      </div>
    );
  }

  const handleViewDetails = recipeId => {
    navigate(`/home/recipes/${recipeId}`);
  };

  const getDifficultyColor = difficulty => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return '#22c55e';
      case 'medium':
        return '#f59e0b';
      case 'hard':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>{location.pathname.slice(6)} list page</h2>

      <div style={gridStyle}>
        {data?.recipes?.map(recipe => (
          <div key={recipe.id} style={cardStyle}>
            <span
              style={{
                ...badgeStyle,
                background: getDifficultyColor(recipe.difficulty),
              }}
            >
              {recipe.difficulty}
            </span>

            <img src={recipe.image} alt={recipe.name} style={imageStyle} />

            <div style={cardContent}>
              <h3 style={cardTitle}>{recipe.name}</h3>

              <button onClick={() => handleViewDetails(recipe.id)} style={buttonStyle}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ================================================================================
const pageStyle = {
  padding: '30px',
  background: '#f1f5f9',
  minHeight: '100vh',
};

const titleStyle = {
  marginBottom: '30px',
  color: '#0f172a',
  fontSize: '26px',
  fontWeight: '700',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
  gap: '25px',
};

const cardStyle = {
  borderRadius: '14px',
  overflow: 'hidden',
  background: '#ffffff',
  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
  transition: '0.25s ease',
  position: 'relative',
};

const badgeStyle = {
  position: 'absolute',
  top: '12px',
  right: '12px',
  color: '#ffffff',
  padding: '5px 11px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '600',
};

const imageStyle = {
  width: '100%',
  height: '170px',
  objectFit: 'cover',
};

const cardContent = {
  padding: '18px',
};

const cardTitle = {
  margin: '5px 0 12px',
  fontSize: '18px',
  color: '#020617',
  fontWeight: '700',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '9px',
  border: 'none',
  background: '#2563eb',
  color: '#ffffff',
  fontWeight: '600',
  fontSize: '14px',
  cursor: 'pointer',
};

const loadingStyle = {
  textAlign: 'center',
  padding: '60px',
  fontSize: '18px',
  color: '#64748b',
  fontWeight: '500',
};

const errorBox = {
  textAlign: 'center',
  padding: '60px',
  color: '#ef4444',
};
