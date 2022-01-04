import React from 'react';
import '../TodoList.css';

interface TodoListProps{
    things: {id: string, text: string}[];
    onDeleteTodo: (id: string)=> void;
  };

const TodoList: React.FC<TodoListProps> = (props) => {
    
    return (
        <div>
           <ul>
           {props.things.map((todo => {
            return   <li key = {todo.id}>Item number {todo.id} {' '}{todo.text}
                        <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
                        </li>
              
           }))} 
            </ul>
        </div>
    )
}

export default TodoList
