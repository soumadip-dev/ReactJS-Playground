import { useReducer } from 'react';
import ClassBasedComponent from './components/class_component';
import CounterButton from './components/counter/CounterButton';
import CounterDisplay from './components/counter/CounterDisplay';
import FunctionalComponent from './components/functionalComponent';
import ProductList from './components/products';
import Users from './components/Users';
import UseReducerExample from './useReducer-example';
import TodoApp from './TodoApp';
import FORM from './components/form';
import Login from './components/form/Dynamic_Form/login';
import Register from './components/form/Dynamic_Form/register';

// Action Types
const SHOW_BASIC_PRACTICE = 'SHOW_BASIC_PRACTICE';
const SHOW_TODO_PROJECT = 'SHOW_TODO_PROJECT';

// Initial State
const initialState = {
  showBasicPractice: true,
  showTodoProject: false,
};

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case SHOW_TODO_PROJECT:
      return {
        ...state,
        showTodoProject: true,
        showBasicPractice: false,
      };

    case SHOW_BASIC_PRACTICE:
      return {
        ...state,
        showTodoProject: false,
        showBasicPractice: true,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <div>
      {state.showBasicPractice && (
        <button onClick={() => dispatch({ type: SHOW_TODO_PROJECT })}>Open Todo Project</button>
      )}

      {state.showTodoProject && (
        <button onClick={() => dispatch({ type: SHOW_BASIC_PRACTICE })}>Open Basic Practice</button>
      )}

      {state.showBasicPractice ? (
        <div>
          <h1>React Concepts Practice</h1>

          {/* <UseReducerExample />

          <ClassBasedComponent />

          <FunctionalComponent />

          <Users />

          <ProductList />

          <div>
            <CounterButton />
            <CounterDisplay />
          </div> 
          <FORM />
          */}
          <div style={{ display: 'flex', gap: '20px', flexDirection: 'row' }}>
            <Login />
            <Register />
          </div>
        </div>
      ) : (
        <TodoApp />
      )}
    </div>
  );
}

export default App;
