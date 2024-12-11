// src/components/TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="todo-list">
      <h1>Lista de Afazeres</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
