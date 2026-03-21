import { useEffect, useState } from 'react';
import classes from './styles.module.css';
import TodoItem from './components/todo-item';
import TodoDetails from './components/todo-details';
import { Box, Card, Skeleton } from '@mui/material';

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  //* fetch list of todos
  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/todos');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json();

      if (data?.todos.length > 0) {
        setTodoList(data.todos);
      } else {
        setTodoList([]);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  //* fetch details of current todo
  async function fetchDetailsOfCurrentTodo(todoId) {
    try {
      const response = await fetch(`https://dummyjson.com/todos/${todoId}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data) {
        setTodoDetails(data);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple TODO</h1>
      <div className={classes.todoListWrapper}>
        {loading &&
          [...Array(12)].map((_, index) => (
            <Card
              key={index}
              sx={{
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                p: 2,
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Skeleton variant="text" width="90%" height={30} animation="wave" />
                <Skeleton variant="text" width="60%" height={30} animation="wave" />
              </Box>

              <Skeleton
                variant="rounded"
                width="100%"
                height={36}
                sx={{ borderRadius: 1 }}
                animation="wave"
              />
            </Card>
          ))}
        {error && <p>{error.message}</p>}
        {todoList &&
          todoList.map(todoItem => (
            <TodoItem key={todoItem.id} todo={todoItem} fetchDetails={fetchDetailsOfCurrentTodo} />
          ))}
      </div>
      <TodoDetails
        openDialog={openDialog}
        todoDetails={todoDetails}
        setOpenDialog={setOpenDialog}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}
