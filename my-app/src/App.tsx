import React, {useState} from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import {Todo} from './todo.models';


const App: React.FC = ()=> {
  //const todos = [{id:1, text: 'Finish the course'}];
  //const [todos, setTodos] = useState<{id:string; text:string}[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string)=>{
    setTodos(prevTodos=>[ ...prevTodos, {id:todos.length.toString(), text: text}]);
  }

  const todoDeleteHandler = (todoId:String) =>{
    setTodos(prevTodos =>{
      return prevTodos.filter(todo=> todo.id!==todoId);
    });
  }
  return (
    <div className="App"> 
    <NewTodo onAddTodo = {todoAddHandler}/>
     <TodoList things={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
