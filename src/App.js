import React, {Component} from 'react';
import Todos from './todos';
import AddTodo from './addForm';
import './App.css';

class App extends Component{
  
  state = {
    todos : [
      {id : 1, content : 'coding react !'},
      {id : 2, content : 'some work out !'} 
    ]
  };
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return id !== todo.id;
    });

    this.setState({
      todos : todos
    });
  }
  
  addTodo = (todo) => {
    todo.id = Math.random() * 10;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  }

  render(){
    return (
      <div className="todo-app container">
       <h1 className = "center blue-text header">Simple Todo's List</h1>
       <h1 className = 'second-header'>my first react js project</h1>
       <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo} />
       <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }

}

export default App;
