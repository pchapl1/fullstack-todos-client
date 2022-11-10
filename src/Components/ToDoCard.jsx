import React from "react";
import Button from 'react-bootstrap/Button';

const ToDoCard = (props) => {
    const { toDo, urlEndpoint } = props

    const handleSetToDoComplete = async (props) => {
        // const [isComplete, setIsComplete] = useState()
        const response = await fetch(`${urlEndpoint}/todos/update-one/:id`, {
            method: 'PUT',
            body: JSON.stringify({
                // title,
                // description,
                // priority
            }),
            headers: {
				'Content-Type': 'application/json'
			}
        })
    }

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
            <Button onClick={handleSetToDoComplete} variant="primary">
                    Toggle Complete
            </Button>
        </div>
    )
}

export default ToDoCard;