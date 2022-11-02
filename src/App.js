import { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.css';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0);

  const handleHeroClick = () => { }

  return (
    <div className="App">
      <h1>React hook - Clock</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Easy Frontend" onClick={handleHeroClick}></Hero>
    </div>
  );
}

export default App;
