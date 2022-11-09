import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { json } from "react-router-dom";

import './App.css';
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';

function App() {

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT
  // remove this array later
  // const mockTodos = [{
  //   id: "4387f4d8-aeac-4559-9f1b-3c5d537c955c",
  //   title: "Implement Fullstack ToDo List",
  //   description: "Implement the fullstack todo list application.",
  //   isComplete: false,
  //   priority: "High",
  //   creationDate: new Date(),
  //   lastModified: new Date(),
  //   completedDate: null
  // }, {
  //   id: "e365f13c-4c1d-4ee1-8a66-3dbbbab71f0d",
  //   title: "Create /all route for mock data",
  //   description: "Create an express route that will respond with the mock todo list.",
  //   isComplete: false,
  //   priority: "High",
  //   creationDate: new Date(),
  //   lastModified: new Date(),
  //   completedDate: null
  // }, {
  //   id: "08dd1f20-7d31-4120-89ed-343d4006a7cb",
  //   title: "Create a home page in the client",
  //   description: "Create a Home Page in React that will display all the todos.",
  //   isComplete: false,
  //   priority: "High",
  //   creationDate: new Date(),
  //   lastModified: new Date(),
  //   completedDate: null
  // }, {
  //   id: "98a06f8f-50c9-4832-9d2d-daa45543db00",
  //   title: "Create the todo card component",
  //   description: "Create a react ToDoCard component that will be rendered for each todo on the home page.",
  //   isComplete: false,
  //   priority: "Medium",
  //   creationDate: new Date(),
  //   lastModified: new Date(),
  //   completedDate: null
  // }, {
  //   id: "7c5d70bb-2a00-4009-9bb8-1bb163fb501f",
  //   title: "Test basic application with mock data",
  //   description: "Visit the client Home Page to see the todo's displayed as a list.",
  //   isComplete: false,
  //   priority: "Medium",
  //   creationDate: new Date(),
  //   lastModified: new Date(),
  //   completedDate: null
  // }]

  // remove the mockToDos from this later on
  const [toDoList, setToDoList] = useState([])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
        {
          index: true,
          element: <HomePage toDoList={toDoList}/>
        }
      ]
    }
  ])

  useEffect(()=>{

    const fetchToDos = async ()=> {
      // console.log(urlEndpoint)
      // const result = await fetch(`${urlEndpoint}/todos/all`)
      const result = await fetch('/todos/all')
      // console.log(result)

      const toDos = await result.json()
      console.log(toDos)

      setToDoList(toDos)
    }

    fetchToDos()

  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
