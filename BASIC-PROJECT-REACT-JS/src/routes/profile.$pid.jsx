import { createFileRoute } from '@tanstack/react-router';
import useFetch from '../hooks/useFetch';
import { ShimmerPostItem } from 'react-shimmer-effects';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/profile/$pid')({
  component: RouteComponent,
});

function RouteComponent() {
  const { pid } = Route.useParams();
  const url = `https://api.freeapi.app/api/v1/public/randomusers/${pid}`;

  const { data, error, loading } = useFetch(url);

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={profileContainer}>
          <ShimmerPostItem card title text cta />
        </div>
      </div>
    );
  }

  const user = data?.data;
  return (
    <div style={containerStyle}>
      <Link to="/Profiles" style={backButtonStyle}>
        ← Back to Profiles
      </Link>
      <h1 style={headingStyle}>User Profile</h1>
      <div style={profileContainer}>
        <img src={user.picture.large} alt="User profile" style={profileImageStyle} />
        <h2 style={profileName}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
        <p style={profileEmail}>{user.email}</p>
        <div style={profileDetails}>
          <div style={detailItem}>
            <span style={detailLabel}>Gender:</span>
            <span>{user.gender}</span>
          </div>
          <div style={detailItem}>
            <span style={detailLabel}>Date of Birth:</span>
            <span>
              {new Date(user.dob.date).toLocaleDateString()} (Age: {user.dob.age})
            </span>
          </div>
          <div style={detailItem}>
            <span style={detailLabel}>Phone:</span>
            <span>{user.phone}</span>
          </div>
          <div style={detailItem}>
            <span style={detailLabel}>Cell:</span>
            <span>{user.cell}</span>
          </div>
          <div style={detailItem}>
            <span style={detailLabel}>Address:</span>
            <span>
              {user.location.street.number} {user.location.street.name},<br />
              {user.location.city}, {user.location.state},<br />
              {user.location.country}, {user.location.postcode}
            </span>
          </div>
          <div style={detailItem}>
            <span style={detailLabel}>Nationality:</span>
            <span>{user.nat}</span>
          </div>
          <div style={detailItem}>
            <span style={detailLabel}>Registered:</span>
            <span>
              {new Date(user.registered.date).toLocaleDateString()} (Age: {user.registered.age})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '40px 20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f5f6fa',
  minHeight: '100vh',
};
// Styles (add these to your existing styles)
const backButtonStyle = {
  display: 'inline-block',
  marginBottom: '20px',
  color: '#3498db',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  '&:hover': {
    textDecoration: 'underline',
  },
};
const headingStyle = {
  textAlign: 'center',
  color: '#2c3e50',
  fontSize: '2rem',
  marginBottom: '10px',
};
// Profile styles
const profileContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  padding: '40px',
  maxWidth: '600px',
  margin: '0 auto',
};

const profileImageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '24px',
};

const profileDetails = {
  width: '100%',
};

const profileName = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#2c3e50',
  marginBottom: '8px',
  textAlign: 'center',
};

const profileEmail = {
  fontSize: '1rem',
  color: '#7f8c8d',
  wordBreak: 'break-word',
  textAlign: 'center',
  marginBottom: '24px',
};

const detailItem = {
  marginBottom: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 0',
  borderBottom: '1px solid #eee',
};

const detailLabel = {
  fontWeight: '600',
  color: '#2c3e50',
  marginRight: '10px',
};
