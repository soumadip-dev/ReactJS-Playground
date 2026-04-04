import useWindowResize from '../../hooks/use-window-resize';

export default function CommentList() {
  const windowSize = useWindowResize();

  return (
    <div style={container}>
      <h2 style={heading}>Comments List Page</h2>

      <h3 style={windowInfo}>
        Width: {windowSize.width}px | Height: {windowSize.height}px
      </h3>
    </div>
  );
}

const container = {
  padding: '20px',
  margin: '20px auto',
  maxWidth: '600px',
  backgroundColor: '#f4f6f8',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const heading = {
  color: '#2c3e50',
  marginBottom: '15px',
};

const windowInfo = {
  color: '#34495e',
  backgroundColor: '#ffffff',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ddd',
  display: 'inline-block',
};
