# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Todo app solution](#frontend-mentor---todo-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot



### Links

- Solution URL: [Add solution URL here](https://github.com/TorCanHack/todo-app)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwind-CSS


### What I learned

As part of the bonus part of this challenge I included the drag and drop functionality for the todo list. Prior to this challenge I did not know how to incorporate this feature. 

I used Hello Pangea DND (which is a fork of React DnD).

To get Started, I had to install Hello Pangea DND in my working directory using `npm install @hello-pangea/dnd`

Once Hello Pangea DnD was successfully installed, I imported it into my main component as follows

  `import { DragDropContext } from '@hello-pangea/dnd';`

For the Drag and drop feature to work, I had to wrap the section of web app that I wanted to have the functionality in `<DragDropContext></DragDropContext>`. So I wrapped my TodoList Component (which as the name suggest is a list of the todos a user creates) as follows:

````js
<DragDropContext onDragEnd={handleOnDragEnd}>
    <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
</DragDropContext>
````

The `onDragEnd` is an event handler that is triggered when an item is dragged/dropped. It accepts a callback funstion usually named hanleOnDragEnd. In the handleOnDragEnd, logic was added to define and set the limits of the functionality of the drag and drop. 

````js
const handleOnDragEnd = (result) => {
    if(!result.destination) return

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items)
}
````
The above function as mentioned handles the drag/drop event. It ends early if the item dragged is not dropped in a proper place, that is, outside the `<DragDropContext></DragDropContext>` or if a drop was canceled. The rest of the code proceeds to rearrange the Todo List by ceating a copy of the list and then extrating the item dragged and fixing it in the new postion. Finally the state of the list is update to reflect the new order of items in the list. 

Then I imported Hello Pangea DnD into the TodoList Component as follows:
  `import { Droppable, Draggable } from '@hello-pangea/dnd';`

I wrapped my TodoList Component in draggable and droppable components:

````js
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
````

As I was trying to figure out how the drag and drop functionality works. I wondered why `<DragDropContext></DragDropContext>` was not enough? It turns out that `<DragDropContext></DragDropContext>` is the parent component that sets out the general configurations while `<Droppable></Droppable>` and `<Draggable></Draggable>` are its children and they give granular configuration by specifing which area is droppable and which items are draggable. 

`<Droppable></Droppable>` acts as a DROP ZONE.
    `droppableId=todos` A unique Id for the droppable area. Without a unique id the code will not work. I look at it as akin to clearance for planes to land.

`<Droppable></Droppable>` uses the render props pattern, which means it expects a function as its child. This function is called with a `provided` object that contains properties and methods used to set up the functionality of the droppable component 

`provided.droppableProps`: Spread onto the droppable container (the <article> ) to add necessary event handlers and attributes for the drag-and-drop to work.

`provided.innerRef`: A React ref that must be attached to the root element of the droppable area. It ensures that the drag-and-drop library can interact correctly with the DOM.

`provided.placeholder`: A placeholder element that maintains the space of a draggable item while it is being dragged. It prevents layout shift when an item is removed from its position.

The `<Draggable></Draggable>` component defines an item that can be dragged around within a Droppable container.

`key={todo.id}`: A unique key for each draggable component, necessary for React's list rendering.
draggableId={todo.id.toString()}: A unique ID for each draggable item, which allows the drag-and-drop library to keep track of which item is being dragged.
`index={index}`: The current position of the item in the list. This index is crucial for correctly reordering the items during drag-and-drop operations.

Render Props Pattern: Like Droppable, Draggable also uses the render props pattern, providing a provided object:

  `provided.innerRef`: A React ref that must be attached to the root element of the draggable item. It allows the drag-and-drop library to manage the draggable DOM element correctly.
  `provided.draggableProps`: Spread onto the draggable element to provide the necessary attributes for it to be draggable.
  `provided.dragHandleProps`: Spread onto the part of the element that users can click and drag. It provides the event handlers required to initiate the drag action.

### Continued development

I would like to learn more about other React libraries that add modern functionality to applications and websites

## Acknowledgments

Thank you to the Front-End Team for this challange
