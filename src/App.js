import React, { useState } from 'react';
import Input from './components/Input';
import Box from './components/Box';

function App() {
    const [todos, setTodos] = useState([]);

    const addToDoHandler = (item) => {
        setTodos([
            ...todos,
            {
                item,
                time: new Date().toLocaleTimeString()
            }
        ]);
    };

    const deleteItemHandler = (index) => {
        setTodos(todos.filter((_, i) => i !== index)); // Remove item at the specified index
    };

    return (
        <div className='bg-gray-900 min-h-screen flex items-center justify-center p-4'>
            <div className='w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
                <h1 className='text-4xl text-center font-bold text-gray-800 py-4'>TODO LIST</h1>
                <Input handle={addToDoHandler} />
                <Box data={todos} onDeleteItem={deleteItemHandler} />
            </div>
        </div>
    );
}

export default App;
