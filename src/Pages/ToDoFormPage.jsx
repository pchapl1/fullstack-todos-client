import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";

const ToDoFormPage = (props)=> {

    const { urlEndpoint, setShouldRefetch} = props

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ priority, setPriority ] = useState("")
    const [successMessage, setSuccessMessage] = useState("")


    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePriority = (e) => {
        setPriority(e.target.value)

    }

    const handleCreateToDo = async () => {
        setShouldRefetch(true)

        // const navigate = useNavigate();

        const response = await fetch(`${urlEndpoint}/todos/create-one`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                description,
                priority
            }),
            headers: {
				'Content-Type': 'application/json'
			}
        })

        setShouldRefetch(false)
    }

    return (
        
        <div className="to-do-form-page">
            <h1>to do form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={handleTitle} type="text" name="title" placeholder="Enter To do title" />
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleDescription} type="textArea" name="description" placeholder="Enter description" />
                    <Form.Label>Priority</Form.Label>
                    <Form.Select onChange={handlePriority} aria-label="Default select example" name="priority">
                        <option> </option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </Form.Select>
                </Form.Group>
                <Button onClick={handleCreateToDo} variant="primary">
                    Add To Do
                </Button>
            </Form>
        </div>
    )
}

export default ToDoFormPage;