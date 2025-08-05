import React from 'react';
import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo';
import './styles/App.css';

const App: React.FC = () => {
    const { todos, addTodo, toggleTodo, removeTodo } = useTodo();

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            <button onClick={() => addTodo(prompt('Enter a new todo:') || '')}>
                Add Todo
            </button>
        </div>
    );
};

export default App;