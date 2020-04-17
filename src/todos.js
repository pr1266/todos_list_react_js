import React from 'react';
import './App.css';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? todos.map( todo =>{
        return (
            <div className = "collection-item" key = {todo.id}>
                <span className = 'content-span' onClick = {() => {deleteTodo(todo.id)}}>{todo.content}</span>
            </div>
        );
    }) : (
        <p className = "center blue-text">You have no todos left !</p>
    );
    return(
        <div className = "todos collection" id = 'todos-container'>
        {todoList}
        </div>
    );
}

export default Todos;