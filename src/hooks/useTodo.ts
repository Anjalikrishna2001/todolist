import { useState } from 'react';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    };
};

export default useTodo;