
import React from "react";
import ToDoCard from "../Components/ToDoCard";

const HomePage = (props) => {
    const {toDoList, urlEndpoint, setShouldRefetch} = props
    
    return (
        <div className="home-page">
            <h1>Full Stack To Do Application</h1>

            {toDoList.map((toDo, index)=>{
                return <ToDoCard setShouldRefetch={setShouldRefetch} urlEndpoint={urlEndpoint} key={index} toDo={toDo}/>
            })}

        </div>
    )
}

export default HomePage;