import { useParams, useNavigate } from 'react-router';
import useFetch from '../../hooks/use-fetch';

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(`https://dummyjson.com/recipes/${id}`);

  if (loading) {
    return <div style={loadingStyle}>Loading recipe details...</div>;
  }

  if (error) {
    return (
      <div style={errorStyle}>
        <h2>Error loading recipe</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <button onClick={() => navigate(-1)} style={backButton}>
        ← Back
      </button>

      <div style={cardStyle}>
        <div style={headerSection}>
          <img src={data?.image} alt={data?.name} style={profileImage} />

          <div style={headerContent}>
            <h2 style={title}>{data?.name}</h2>

            <div style={infoGrid}>
              <div style={infoItem}>
                <span style={label}>Prep</span>
                <span style={value}>{data?.prepTimeMinutes} min</span>
              </div>

              <div style={infoItem}>
                <span style={label}>Cook</span>
                <span style={value}>{data?.cookTimeMinutes} min</span>
              </div>

              <div style={infoItem}>
                <span style={label}>Cuisine</span>
                <span style={value}>{data?.cuisine}</span>
              </div>

              <div style={infoItem}>
                <span style={label}>Calories</span>
                <span style={value}>{data?.caloriesPerServing}</span>
              </div>

              <div style={infoItem}>
                <span style={label}>Meal</span>
                <span style={value}>{data?.mealType?.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        <div style={twoColumnSection}>
          <div>
            <h3 style={sectionTitle}>Ingredients</h3>

            <ul style={listStyle}>
              {data?.ingredients?.map((item, index) => (
                <li key={index} style={listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={sectionTitle}>Instructions</h3>

            <ol style={listStyle}>
              {data?.instructions?.map((step, index) => (
                <li key={index} style={listItem}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================================================================================
const pageStyle = {
  padding: '40px 20px',
  background: '#f1f5f9',
  minHeight: '100vh',
};

const backButton = {
  marginBottom: '20px',
  padding: '9px 18px',
  border: 'none',
  borderRadius: '10px',
  background: '#ffffff',
  cursor: 'pointer',
  fontWeight: '600',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  color: '#0f172a',
};

const cardStyle = {
  maxWidth: '950px',
  margin: 'auto',
  background: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  padding: '30px',
};

const loadingStyle = {
  textAlign: 'center',
  padding: '60px',
  color: '#64748b',
  fontSize: '18px',
  fontWeight: '500',
};

const errorStyle = {
  textAlign: 'center',
  padding: '60px',
  color: '#ef4444',
};

const headerSection = {
  display: 'flex',
  gap: '25px',
  alignItems: 'center',
  marginBottom: '35px',
};

const headerContent = {
  flex: 1,
};

const profileImage = {
  width: '140px',
  height: '140px',
  borderRadius: '18px',
  objectFit: 'cover',
  border: '4px solid #f1f5f9',
};

const title = {
  marginBottom: '15px',
  color: '#020617',
  fontSize: '26px',
  fontWeight: '700',
};

const infoGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '18px',
};

const infoItem = {
  background: '#f8fafc',
  padding: '10px 14px',
  borderRadius: '10px',
  border: '1px solid #e2e8f0',
  minWidth: '110px',
  display: 'flex',
  flexDirection: 'column',
};

const label = {
  fontSize: '12px',
  color: '#64748b',
  fontWeight: '600',
};

const value = {
  fontSize: '15px',
  color: '#0f172a',
  fontWeight: '600',
};

const twoColumnSection = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
  gap: '30px',
};

const sectionTitle = {
  marginBottom: '12px',
  color: '#020617',
  fontSize: '20px',
  fontWeight: '700',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const listItem = {
  background: '#f8fafc',
  padding: '12px 14px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  color: '#334155',
  lineHeight: '1.6',
  fontSize: '15px',
};
