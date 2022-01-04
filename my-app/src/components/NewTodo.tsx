import React, {FormEvent, useRef} from 'react';
import '../NewTodo.css'

type NewTodoProps ={
    onAddTodo:(todoText: string)=> void;    //explicitly protects from non-string inputsa
};

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent)=>{
        event.preventDefault();
        const enteredText= textInputRef.current!.value;
        props.onAddTodo(enteredText);
        console.log("You typed in ", enteredText);
    }


    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type="text" id="todo-text" ref = {textInputRef}/>
            </div>
            <button type='submit'>ADD A TODO</button>
        </form>
    )
}

export default NewTodo
