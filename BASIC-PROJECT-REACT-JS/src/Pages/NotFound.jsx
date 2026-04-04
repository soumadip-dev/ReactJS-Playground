import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! Page Not Found.</p>
    </div>
  );
};

export default NotFound;

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '6rem',
    margin: 0,
    color: '#333',
  },
  message: {
    fontSize: '1.5rem',
    color: '#666',
  },
};
