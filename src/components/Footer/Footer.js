import React from "react";

const Footer = ({filter, setFilter, clearCompleted, activeCount}) => {
    return (
        <footer className="relative -top-28 md:-top-36 p-4 md:px-52 lg:px-96">
            <div className="flex justify-between items-center w-full bg-white dark:bg-veryDarkDesaturatedBlue dark:text-gray-500 h-12 md:h-16  p-4  rounded-b-md mb-6">
                <span>{activeCount} items left</span>
                <button onClick={clearCompleted} className="lg:cursor-pointer">Clear Completed</button>

            </div>
            
            <article className="todo-item flex justify-evenly items-center w-full bg-white dark:bg-veryDarkDesaturatedBlue dark:text-gray-500 h-12 rounded-md p-4 md:h-16 lg:relative lg:-top-22 lg:left-28 lg:bg-transparent lg:dark:bg-transparent lg:justify-center lg:w-96">
                <button onClick={() => setFilter('all')} className={` lg:mx-6 ${filter === 'all' ? 'text-blue-500 font-bold' : ''}`}>All</button>
                <button onClick={() => setFilter('active')} className={` lg:mx-6 ${filter === 'active' ? 'text-blue-500 font-bold' : ''}`}>Active</button>
                <button onClick={() => setFilter('completed')} className={` lg:mx-6 ${filter === 'completed' ? 'text-blue-500 font-bold' : ''}`}>Completed</button>
            </article>
            
        </footer>
    )
}

export default Footer;