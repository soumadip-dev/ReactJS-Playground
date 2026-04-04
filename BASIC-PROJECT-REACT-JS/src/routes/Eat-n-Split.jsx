import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/Eat-n-Split')({
  component: RouteComponent,
});

const initialFriends = [
  {
    id: 118836,
    name: 'Sumit',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -70,
  },
  {
    id: 933372,
    name: 'Sahil',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 200,
  },
  {
    id: 499476,
    name: 'Pratik',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

// Enhanced Style Object
const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f8fafc',
    padding: '20px',
  },
  app: {
    display: 'flex',
    height: '80vh',
    width: '100%',
    maxWidth: '1200px',
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#f8fafc',
    color: '#1e293b',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  sidebar: {
    flex: '0 0 350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    backgroundColor: 'white',
    borderRight: '1px solid #e2e8f0',
    overflow: 'hidden',
  },
  sidebarContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    height: '100%',
    overflow: 'hidden',
  },
  friendsListContainer: {
    flex: '1',
    overflow: 'auto',
  },
  formContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    backgroundColor: '#f8fafc',
    overflow: 'hidden',
  },
  friendList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  friendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
  },
  friendImage: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #e2e8f0',
  },
  red: {
    color: '#ef4444',
    fontWeight: '600',
  },
  green: {
    color: '#10b981',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    marginLeft: 'auto',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#4338ca',
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
  formAddFriend: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
  },
  selectedFriendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: '#eef2ff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    border: '2px solid #4f46e5',
    transform: 'translateY(-2px)',
  },
  formSplitBill: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    height: '100%',
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
    overflow: 'auto',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    transition: 'all 0.2s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#4f46e5',
      boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.2)',
    },
  },
  label: {
    fontWeight: '600',
    fontSize: '14px',
    marginBottom: '6px',
    color: '#475569',
  },
  formTitle: {
    margin: '0 0 16px 0',
    color: '#1e293b',
    fontSize: '20px',
    fontWeight: '700',
  },
  friendName: {
    margin: '0 0 4px 0',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1e293b',
  },
  evenText: {
    color: '#64748b',
    fontSize: '14px',
  },
  select: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    backgroundColor: 'white',
    transition: 'all 0.2s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#4f46e5',
      boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.2)',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  appTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#4f46e5',
    margin: '0',
  },
  emptyState: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#64748b',
    fontSize: '16px',
  },
};

// App Component
function RouteComponent() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend(selected => (selected?.id === friend?.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div style={styles.appContainer}>
      <div style={styles.app}>
        <div style={styles.sidebar}>
          <div style={styles.sidebarContent}>
            <div style={styles.header}>
              <h1 style={styles.appTitle}>Eat-n-Split</h1>
            </div>
            <div style={styles.friendsListContainer}>
              <FriendsList
                friends={friends}
                onSelection={handleSelectFriend}
                selectedFriend={selectedFriend}
              />
            </div>
            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
            <Button onclick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
          </div>
        </div>
        <div style={styles.formContainer}>
          {selectedFriend ? (
            <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
          ) : (
            <div style={styles.emptyState}>Select a friend to split a bill</div>
          )}
        </div>
      </div>
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul style={styles.friendList}>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li
      style={isSelected ? styles.selectedFriendItem : styles.friendItem}
      onClick={() => onSelection(friend)}
    >
      <img src={friend.image} alt={`${friend.name} profile picture`} style={styles.friendImage} />
      <div>
        <h3 style={styles.friendName}>{friend.name}</h3>
        {friend.balance < 0 && (
          <p style={styles.red}>
            {friend.name} owes you ₹{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p style={styles.green}>
            You owe {friend.name} ₹{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p style={styles.evenText}>You and {friend.name} are even</p>}
      </div>
      <Button
        onclick={e => {
          e.stopPropagation();
          onSelection(friend);
        }}
      >
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}

function Button({ children, style, onclick }) {
  return (
    <button style={{ ...styles.button, ...style }} onClick={onclick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=');

  const handleSubmit = e => {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}${id}`,
      balance: 0,
      id,
    };
    onAddFriend(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48?u=');
  };

  return (
    <form style={styles.formAddFriend} onSubmit={handleSubmit}>
      <h3 style={styles.formTitle}>Add Friend</h3>
      <label style={styles.label}>👫 Friend Name</label>
      <input
        type="text"
        style={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
        required
        placeholder="Enter friend's name"
      />

      <label style={styles.label}>📸 Image URL</label>
      <input
        type="text"
        style={styles.input}
        value={image}
        onChange={e => setImage(e.target.value)}
        required
        placeholder="https://i.pravatar.cc/48?u="
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form style={styles.formSplitBill} onSubmit={handleSubmit}>
      <h2 style={styles.formTitle}>Split a bill with {selectedFriend.name}</h2>

      <label style={styles.label}>💰 Bill Value</label>
      <input
        type="number"
        style={styles.input}
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
        placeholder="Enter total bill amount"
      />

      <label style={styles.label}> 🕴️ Your expense</label>
      <input
        type="number"
        style={styles.input}
        value={paidByUser}
        onChange={e =>
          setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))
        }
        placeholder="Enter your share"
      />

      <label style={styles.label}>👫 {selectedFriend.name}'s expense</label>
      <input type="number" style={styles.input} disabled value={paidByFriend} />

      <label style={styles.label}>🤑 Who is paying the bill?</label>
      <select
        style={{ ...styles.input, ...styles.select }}
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
