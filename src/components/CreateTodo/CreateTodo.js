import React, { useState } from "react";

const CreateTodo = ({addTodo}) => {
    const [text,  setText] = useState('')

    const handleSubmit =(e) => {
        e.preventDefault();
        if(text.trim()){
            addTodo(text);
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="todo-input relative -top-28 md:-top-36 p-4 md:px-52 lg:px-96">
            <input type="text" placeholder="Create a new todo..." value={text} onChange={(e) => setText(e.target.value)} className="w-full h-12 p-4 rounded-md dark:bg-veryDarkDesaturatedBlue md:h-16"/>
            
        </form>
    )
}

export default CreateTodo;