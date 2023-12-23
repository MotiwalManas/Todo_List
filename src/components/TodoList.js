// TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onToggleComplete }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onToggleComplete={onToggleComplete} />
            ))}
        </div>
    );
};

export default TodoList;
