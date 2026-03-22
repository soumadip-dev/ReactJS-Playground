import { useEffect, useState } from 'react';

export default function Users() {
  const [userList, setUserList] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch('http://dummyjson.com/users');
      const { users } = await apiResponse.json();

      if (users) {
        setUserList(users);
      } else {
        setUserList([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const containerStyle = {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '40px auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#333',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    border: '1px solid #e5e5e5',
    padding: '12px 15px',
    marginBottom: '10px',
    borderRadius: '6px',
    backgroundColor: '#f9fbff',
    transition: 'all 0.2s ease',
  };

  const textStyle = {
    margin: 0,
    fontSize: '16px',
    fontWeight: '500',
    color: '#444',
  };

  const loadingStyle = {
    padding: '40px',
    textAlign: 'center',
    fontFamily: 'Arial',
    color: '#555',
  };

  if (pending) return <h1 style={loadingStyle}>Fetching users! Please wait....</h1>;

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>All Users Lists</h1>

      <ul style={listStyle}>
        {userList && userList.length > 0 ? (
          userList.map(userItem => (
            <li key={userItem?.id} style={listItemStyle}>
              <p style={textStyle}>
                {userItem?.firstName} {userItem?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1 style={{ textAlign: 'center' }}>No users found! Please try again.</h1>
        )}
      </ul>
    </div>
  );
}
