import React from 'react';

const Landing = () => {
  const containerStyle = {
    flexGrow: 1, // fill available vertical space
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    textAlign: 'center',
    padding: '60px 20px 40px', // add top padding to clear navbar height (~60px)
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '83vh',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#222',
    textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    maxWidth: '600px',
    marginBottom: '32px',
    color: '#444',
    lineHeight: '1.6',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '14px 32px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.4)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    boxShadow: '0 6px 12px rgba(0, 86, 179, 0.6)',
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My React Mini Projects</h1>
      <p style={paragraphStyle}>
        This is a simple collection of projects created using React while learning and building
        hands-on experience.
      </p>
      <a
        href="https://github.com/soumadip-dev/Mini-Projects-React"
        target="_blank"
        rel="noopener noreferrer"
        style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Visit GitHub Repo
      </a>
    </div>
  );
};

export default Landing;
