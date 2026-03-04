import ClassBasedComponent from './components/class_component';
import CounterButton from './components/counter/CounterButton';
import CounterDisplay from './components/counter/CounterDisplay';
import FunctionalComponent from './components/functionalComponent';
import ProductList from './components/products';
import Users from './components/Users';
import UseReducerExample from './useReducer-example';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
