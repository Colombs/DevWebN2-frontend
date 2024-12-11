import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { getEventos, createEvento, updateEvento, deleteEvento } from '../api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // Buscar dados ao carregar o componente
  useEffect(() => {
    const fetchTodos = async () => {
      const eventos = await getEventos();
      setTodos(eventos);
    };
    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    const createdTodo = await createEvento(newTodo);
    setTodos([...todos, createdTodo]);
  };

  const editTodo = async (updatedTodo) => {
    const todo = await updateEvento(updatedTodo.id, updatedTodo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    setEditingTodo(null);
  };

  const removeTodo = async (id) => {
    await deleteEvento(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-list">
      <h1>Lista de Afazeres</h1>
      <TodoForm
        addTodo={addTodo}
        updateTodo={editTodo}
        editingTodo={editingTodo}
      />
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={() => setEditingTodo(todo)}
            onDelete={() => removeTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
