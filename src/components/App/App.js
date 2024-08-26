import React, {useState} from 'react';
import './App.css';
import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode';
import CreateTodo from '../CreateTodo/CreateTodo'
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';
import { DragDropContext } from '@hello-pangea/dnd';










function App() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    const newTodo = { text, completed: false, id: Date.now() };
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  const filteredTodos = todos.filter(todo=> {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  })

  const activeCount = todos.filter(todo => !todo.completed).length;

  const handleOnDragEnd = (result) => {
    if(!result.destination) return

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items)
  }

  return (
    <main className="bg-slate-100 h-full  dark:bg-veryDarkBlue">

      <header className="flex flex-row justify-between items-start  bg-[url('/public/bg-mobile-light.jpg')]  dark:bg-[url('/public/bg-mobile-dark.jpg')] lg:bg-[url('/public/bg-desktop-light.jpg')] lg:dark:bg-[url('/public/bg-desktop-dark.jpg')] bg-cover bg-no-repeat h-52 md:h-72 py-10 px-5 md:px-52 md:py-16 lg:px-96">

        <h1 className='text-white text-4xl md:text-40 tracking-widest'>TODO</h1>
        <ToggleDarkMode/>

      </header>
      
      <CreateTodo addTodo={addTodo}/>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </DragDropContext>
      <Footer filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} activeCount={activeCount}/>

      <p className='relative -top-24 lg:-top-32 text-center text-gray-400 dark:text-gray-500 '>Drag and drop to reoder list</p>
      
      
      
      
    </main>
  );
}

export default App;
