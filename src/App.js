import { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.css';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend!' },
    { id: 2, title: 'We love Easy Frontend!' },
    { id: 3, title: 'They love Easy Frontend!' }
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  });

  useEffect(() => {

    async function fetchPostList() {

      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        console.log(responseJSON);

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error)
      }

    }
    console.log('PostList effect');
    fetchPostList();

  }, [filters]);

  useEffect(() => {
    console.log('TodoList effect');
  })

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(a => a.id === todo.id);
    if (index < 0) return;

    const newTodoClick = [...todoList];
    newTodoClick.splice(index, 1);
    setTodoList(newTodoClick);
  }
  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);

    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    };

    const newTodoList = [...todoList,];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
    console.log('New filters: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    });
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <h1>Welcome to React Hooks!</h1>

      {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>

      <TodoList todos={todoList}
        onTodoClick={handleTodoClick}>
      </TodoList> */}

      {/* <PostFiltersForm onSubmit={handleFiltersChange}></PostFiltersForm>
      <PostList posts={postList}></PostList>
      <Pagination pagination={pagination} onPageChange={handlePageChange}></Pagination> */}
      {showClock && <Clock></Clock>}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>

    </div>
  );
}

export default App;
