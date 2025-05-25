import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  
    
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
         
    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue("");
        }
    }
    const handleToggleTodo = index =>  {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }
    const handleEditTodo = index =>  {
        //const newTodos = [...todos];

    }
    const handleDeleteTodo = index =>  {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
        
    return (
         <div className='todoList border border-1 bg-light p-3 m-2'> 
            <h5 className="text-center">Component: TodoList</h5>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo();
                    }
                }}
                placeholder="Add a new task"
            />  
            <button onClick={(handleAddTodo)}> Přidat úkol </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}
                        className={todo.completed ? 'completed' : ''}
                        onClick={() => handleToggleTodo(index)}
                    >
                        <span>{todo.text}</span>
                        <div className="todo-actions">
                            <button onClick={(e) => { handleEditTodo(index); e.stopPropagation();}}>Edit</button>
                            <button onClick={(e) => { handleDeleteTodo(index); e.stopPropagation(); }}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;