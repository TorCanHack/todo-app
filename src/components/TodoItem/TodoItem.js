import React from "react";
import checkIcon from '../images/icon-check.svg';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="px-4 md:px-52 lg:px-96">
      <article className={`todo-item flex items-center w-full bg-white h-12 md:h-16 first:rounded-t-md p-4 border-b border-black dark:bg-veryDarkDesaturatedBlue dark:text-lightGrayishBlue ${todo.completed ? 'completed' : ''}`}>
        <label className="flex items-center cursor-pointer">
          
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleTodo(todo.id)} 
            className="sr-only h-5 w-5 peer" 
          />
          
          
          <div className="w-5 h-5 bg-white dark:bg-veryDarkDesaturatedBlue rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-500 peer-checked:border-0">
            {/* Conditionally render the check icon */}
            {todo.completed && <img src={checkIcon} alt="Checked" className="w-2 h-2"/>}
          </div>
        </label>

        <span className={todo.completed ? 'line-through mx-4 text-gray-600 ' : 'mx-4'}>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)} className="ml-auto text-veryDarkGrayishBlue2 dark:text-veryDarkGrayishBlue2">X</button>
      </article>
    </div>
  );
};

export default TodoItem;
