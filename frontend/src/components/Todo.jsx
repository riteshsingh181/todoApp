import React from "react";

function Todo(todoAttr){
    return(
        <div className="todo">
            <h1>{todoAttr.title}</h1>
            <h2>{todoAttr.description}</h2>
            <p>Status: {todoAttr.completed ? "completed" : "pending"}</p>
            <button>Mark as Done</button>
        </div>
    )
}

export default Todo;