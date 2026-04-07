import { Link } from 'react-router';

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/goals" style={{ textDecoration: 'none', color: 'inherit' }}>Goal Tracker</Link>
        </li>
        <li>
          <Link to="/form" style={{ textDecoration: 'none', color: 'inherit' }}>
            Dynamic Form
          </Link>
        </li>
        <li>
          <Link to="/timer" style={{ textDecoration: 'none', color: 'inherit' }}>
            Timer
          </Link>
        </li>
      </ul>
    </nav>
  );
}
