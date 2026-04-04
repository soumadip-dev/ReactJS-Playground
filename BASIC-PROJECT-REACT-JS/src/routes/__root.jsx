import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.2rem',
    padding: '1rem 0',
    backgroundColor: '#007bff',
    boxShadow: '0 0.125rem 0.375rem rgba(0,0,0,0.15)',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 600,
    padding: '0.5rem 0.75rem', // ~8px 12px
    borderRadius: '0.375rem', // ~6px
    transition: 'background-color 0.3s ease',
  };

  const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '1rem 0', // ~16px
    textAlign: 'center',
    fontSize: '0.95rem',
    color: '#555',
    marginTop: 'auto',
    borderTop: '1px solid #ddd',
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={navContainerStyle}>
        {[
          { to: '/', label: 'Home' },
          { to: '/counter', label: 'Counter' },
          { to: '/todo', label: 'Todo' },
          { to: '/meals', label: 'Meals' },
          { to: '/profiles', label: 'Profiles' },
          { to: '/form', label: 'Form' },
          { to: '/stopWatch', label: 'Stop Watch' },
          { to: '/debounceDemo', label: 'Debounce' },
          { to: '/calculator', label: 'Calculator' },
          { to: '/toggleBackgroundColor', label: 'Toggle Theme' },
          { to: '/Testimonials', label: 'Testimonial' },
          { to: '/accordion', label: 'Accordion' },
          { to: '/Far-Away', label: 'Far Away' },
          { to: '/eat-n-split', label: 'Eat Split' },
        ].map(({ to, label }, idx) => (
          <Link
            key={to}
            to={to}
            style={{
              ...linkStyle,
              backgroundColor: hoveredIndex === idx ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div style={{ flex: 1, padding: '1.25rem' }}>
        <Outlet />
      </div>

      <footer style={footerStyle}>
        © {new Date().getFullYear()} Soumadip Majila. All rights reserved.
      </footer>
      <TanStackRouterDevtools />
    </div>
  );
}
