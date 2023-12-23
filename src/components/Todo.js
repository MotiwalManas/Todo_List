// Todo.js
import React from 'react';

const Todo = ({ todo, onToggleComplete }) => {
    return (
        <div
            onClick={() => onToggleComplete(todo.id)}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
            {todo.text}
        </div>
    );
};

export default Todo;
