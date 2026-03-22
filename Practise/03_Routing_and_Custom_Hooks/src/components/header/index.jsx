import { Link, useNavigate } from 'react-router';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: '20px',
          fontWeight: '600',
        }}
      >
        HomePage
      </div>

      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/home/comments"
            style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '15px',
            }}
          >
            Alternative way to go to comments
          </Link>
        </li>

        <li>
          <button
            onClick={() => navigate('/home/recipes')}
            style={{
              padding: '6px 14px',
              border: '1px solid #ccc',
              background: '#fff',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Recipes
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate('/home/comments')}
            style={{
              padding: '6px 14px',
              border: '1px solid #ccc',
              background: '#fff',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Comments
          </button>
        </li>
      </ul>
    </header>
  );
}
