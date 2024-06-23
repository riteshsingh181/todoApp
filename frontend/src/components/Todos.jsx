import React from "react";
import { useState } from "react";
import Todo from "../Todo";

async function Todos(props){
    const todos = props.todos;
    return(
        <div id="todoContainer">
            {todos.map((todo)=>{
                return(
                    <Todo todoAttr= {todo}/>
                )
            })}
        </div>
    )
}

export default Todos;