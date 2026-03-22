import React, { useState } from 'react';

function FunctionalComponent() {
  function handleShowText() {
    setShowText(!showText);
  }
  const [showText, setShowText] = useState(true);
  return (
    <div>
      {showText && <h4>Functional Component</h4>}
      <button onClick={handleShowText}>{showText ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default FunctionalComponent;
