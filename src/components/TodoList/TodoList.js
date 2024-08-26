import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Droppable, Draggable } from '@hello-pangea/dnd';


const TodoList = ({todos, toggleTodo, deleteTodo}) => {
    return (
        <article>
            <Droppable droppableId="todos">
            {(provided) => (
                <article className="todo-list relative -top-24 md:-top-32" {...provided.droppableProps} ref={provided.innerRef}>
                    {todos.map((todo, index) => (
                        <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

                                </div>
                            )}

                        </Draggable>
                    ))}
                    {provided.placeholder}

                </article>
            )}

            </Droppable>
        </article>
    )
}

export default TodoList