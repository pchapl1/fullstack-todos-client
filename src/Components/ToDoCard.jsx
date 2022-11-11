import React from "react";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const ToDoCard = (props) => {
    const { toDo, urlEndpoint, setShouldRefetch } = props
    const [isComplete, setIsComplete] = useState(toDo.isComplete)


    const handleSetToDoComplete = async () => {
        
        setShouldRefetch(true)

        if (toDo.isComplete === true) {
            setIsComplete(false)
        } else {
            setIsComplete(true)
        }
        
        const response = await fetch(`${urlEndpoint}/todos/update-one/${toDo.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                isComplete
            }),
            headers: {
				'Content-Type': 'application/json'
			}
        })
        setShouldRefetch(false)
    }

    const handleDeleteToDo = async ()=> {
        setShouldRefetch(true)

        const response = await fetch(`${urlEndpoint}/todos/delete-one/${toDo.id}`, {
            method: 'DELETE'
        })


        setShouldRefetch(false)
        
    }

    return (
        <div className="todo-card">
            <h2>{toDo.title}</h2>
            <p>ID: {toDo.id}</p>
            <p>Description: {toDo.description}</p>
            <p>Priority: {toDo.priority}</p>
            { toDo.isComplete === true && 
                <p>Is Complete</p>
            }
            { toDo.isComplete === true && 
            <p>Completed Date: {toDo.completedDate}</p>

            }
            {
                toDo.isComplete === false &&
                <p>Not complete</p>
            }
            <p>Creation Date: {toDo.creationDate.toString()}</p>
            <p>Last Modified: {toDo.lastModified.toString()}</p>
            <Button onClick={handleSetToDoComplete} variant="primary">
                    Toggle Complete
            </Button>
            <Button onClick={handleDeleteToDo} variant="primary">
                    Delete To Do
            </Button>
        </div>
    )
}

export default ToDoCard;