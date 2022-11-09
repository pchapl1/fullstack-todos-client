import React from "react";

const ToDoCard = (props) => {
    const {toDo} = props
    return (
        <div className="todo-card">
            <h2>{toDo.title}</h2>
            <p>ID: {toDo.id}</p>
            <p>Description: {toDo.description}</p>
            <p>Priority: {toDo.priority}</p>
            <p>Is Complete: {toDo.isComplete}</p>
            {/* <p>Creation Date: {toDo.creationDate}</p>
            <p>Last Modified{toDo.lastModified}</p> */}
            <p>Completed Date: {toDo.completedDate}</p>
        </div>
    )
}

export default ToDoCard;