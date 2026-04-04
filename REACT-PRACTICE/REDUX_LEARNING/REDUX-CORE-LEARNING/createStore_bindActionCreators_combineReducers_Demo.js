import { createStore, bindActionCreators, combineReducers } from 'redux';

// Action type constants
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const ADD_USER = 'ADD_USER';

// Reducer to manage todo state
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const todoText = action.payload.todoText;
      return [
        ...state,
        {
          text: todoText,
          isFinished: false,
          id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
        },
      ];
    case DELETE_TODO:
      const id = action.payload.id;
      return state.filter(t => t.id !== id);
    case EDIT_TODO:
      const todoId = action.payload.id;
      const todoTxt = action.payload.todoText;
      return state.map(t => (t.id === todoId ? { ...t, text: todoTxt } : t));
    default:
      return state;
  }
}

// Reducer to manage user state
function userReducer(state = [], action) {
  if (action.type === ADD_USER) {
    const userName = action.payload.userName;
    return [
      ...state,
      {
        name: userName,
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  }
  return state;
}

// Combine reducers into a single root reducer
const reducer = combineReducers({ todo: todoReducer, user: userReducer });

// Create Redux store with the combined reducer and an initial state
const { dispatch, subscribe, getState, replaceReducer } = createStore(reducer, []);

// Subscribe to state changes and log the current state
subscribe(() => console.log(getState()));

// Action creators for dispatching actions
const addTodo = todoText => ({ type: ADD_TODO, payload: { todoText } });
const deleteTodo = id => ({ type: DELETE_TODO, payload: { id } });
const editTodo = (id, todoText) => ({ type: EDIT_TODO, payload: { id, todoText } });
const addUser = userName => ({ type: ADD_USER, payload: { userName } });

// Bind action creators to the dispatch function
const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, addUser }, dispatch);

// Dispatching actions to modify the todo state
actions.addTodo('Todo 1');
actions.addTodo('Todo 2');
actions.deleteTodo(1);
actions.editTodo(2, 'New Todo 2');

// Dispatching actions to modify the user state
actions.addUser('User 1');
actions.addUser('User 2');
