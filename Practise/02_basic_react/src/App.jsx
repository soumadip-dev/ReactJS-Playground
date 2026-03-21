import { useState } from 'react';
import ClassBasedComponent from './components/class_component';
import CounterButton from './components/counter/CounterButton';
import CounterDisplay from './components/counter/CounterDisplay';
import FunctionalComponent from './components/functionalComponent';
import ProductList from './components/products';
import Users from './components/Users';
import UseReducerExample from './useReducer-example';
import Todo from './Todo';

function App() {
  const [showSecondProject, setShowSecondProject] = useState(false);
  return (
    <div>
      <button onClick={() => setShowSecondProject(!showSecondProject)}>
        Toggle between the Todo project and the Concepts
      </button>
      {!showSecondProject ? (
        <>
          <h1>React JS Concepts</h1>
          <UseReducerExample />
          <ClassBasedComponent />
          <FunctionalComponent />
          <Users />
          <ProductList />
          <>
            <CounterButton />
            <CounterDisplay />
          </>
        </>
      ) : (
        <Todo />
      )}
    </div>
  );
}

export default App;
