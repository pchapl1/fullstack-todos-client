import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import ToDoFormPage from './Pages/ToDoFormPage';

function App() {

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

  const [toDoList, setToDoList] = useState([])
  console.log("=================================")
  console.log(toDoList)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
        {
          index: true,
          element: <HomePage urlEndpoint={urlEndpoint} toDoList={toDoList}/>
        },
        {
          index: true,
          path: "/todo-form",
          element: <ToDoFormPage urlEndpoint={urlEndpoint}/>
        }
      ]
    }
  ])

  useEffect(()=>{

    const fetchToDos = async ()=> {

      const result = await fetch(`${urlEndpoint}/todos/all`)

      const toDosPayLoad = await result.json()

      setToDoList(toDosPayLoad.toDos)
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
