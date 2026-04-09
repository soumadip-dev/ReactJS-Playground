import { Link } from 'react-router';

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/goals"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Goal Tracker
          </Link>
        </li>
        <li>
          <Link
            to="/form"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Dynamic Form
          </Link>
        </li>
        <li>
          <Link
            to="/timer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Timer
          </Link>
        </li>
        <li>
          <Link
            to="/fetch"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Data Fetching
          </Link>
        </li>
      </ul>
    </nav>
  );
}
