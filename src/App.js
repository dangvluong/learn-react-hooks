import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend!' },
    { id: 2, title: 'We love Easy Frontend!' },
    { id: 3, title: 'They love Easy Frontend!' }
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(a => a.id === todo.id);
    if (index < 0) return;

    const newTodoClick = [...todoList];
    newTodoClick.splice(index, 1);
    setTodoList(newTodoClick);
  }

  return (
    <div className="App">
      <h1>Welcome to React Hooks!</h1>

      <TodoList todos={todoList}
        onTodoClick={handleTodoClick}>

      </TodoList>
    </div>
  );
}

export default App;
