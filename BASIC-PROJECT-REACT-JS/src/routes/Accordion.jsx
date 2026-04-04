import { createFileRoute } from '@tanstack/react-router';
import { accordionData } from '../utils/content';
import { useState } from 'react';

export const Route = createFileRoute('/Accordion')({
  component: AccordionPage,
});

function AccordionPage() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div style={accordionContainerStyles}>
      <h1 style={headingStyles}>FAQ Accordion</h1>
      <div style={accordionStyles}>
        {accordionData.map(({ title, content, number }) => (
          <AccordionItem
            key={number}
            title={title}
            content={content}
            number={number}
            isOpen={number === curOpen}
            onToggle={() => setCurOpen(number === curOpen ? null : number)}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ title, content, number, isOpen, onToggle }) {
  return (
    <article style={accordionItemStyles}>
      <header
        style={{
          ...accordionHeaderStyles,
          backgroundColor: isOpen ? '#e9ecef' : accordionHeaderStyles.backgroundColor,
        }}
        onClick={onToggle}
      >
        <span style={numberStyles}>{String(number).padStart(2, '0')}</span>
        <h3 style={titleStyles}>{title}</h3>
        <span style={iconStyles}>{isOpen ? '−' : '+'}</span>
      </header>
      {isOpen && (
        <div style={contentStyles}>
          <p style={contentTextStyles}>{content}</p>
        </div>
      )}
    </article>
  );
}

// Style objects
const accordionContainerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem 1rem',
  fontFamily: "'Inter', Arial, sans-serif",
};

const headingStyles = {
  fontSize: '2rem',
  fontWeight: '600',
  color: '#212529',
  marginBottom: '2rem',
  textAlign: 'center',
};

const accordionStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const accordionItemStyles = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  transition: 'all 0.2s ease',
};

const accordionHeaderStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.25rem 1.5rem',
  backgroundColor: '#f8f9fa',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: '#e9ecef',
  },
};

const numberStyles = {
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#495057',
  minWidth: '2rem',
};

const titleStyles = {
  fontSize: '1rem',
  fontWeight: '500',
  color: '#212529',
  margin: 0,
  flexGrow: 1,
};

const iconStyles = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#495057',
  transition: 'transform 0.2s ease',
  transform: 'rotate(0deg)',
};

const contentStyles = {
  padding: '0 1.5rem',
  maxHeight: '500px',
  animation: 'fadeIn 0.3s ease',
};

const contentTextStyles = {
  margin: '1.25rem 0',
  fontSize: '0.9375rem',
  lineHeight: '1.6',
  color: '#495057',
};

// For animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
