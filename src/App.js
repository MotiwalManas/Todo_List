// App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleAddTodo = (event) => {
        if (event.key === 'Enter' && inputText.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputText,
                completed: false,
                createdAt: new Date().toISOString(),
            };
            setTodos([newTodo, ...todos]);
            setInputText('');
        }
    };

    const handleToggleComplete = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleReset = () => {
        setTodos([]);
    };

    return (
        <div className="app-container">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add Todo"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={handleAddTodo}
                />
            </div>
            <TodoList todos={todos.filter((todo) => !todo.completed)} onToggleComplete={handleToggleComplete} />
            <h2>Completed Todos</h2>
            <TodoList todos={todos.filter((todo) => todo.completed)} onToggleComplete={handleToggleComplete} />
            <button className="reset-button" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
};

export default App;
