
import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <p><strong>Hora:</strong> {todo.hora}</p>
      <p><strong>Nome:</strong> {todo.nome}</p>
      <p><strong>Descrição:</strong> {todo.descricao}</p>
      <p><strong>Observação:</strong> {todo.observacao}</p>
    </div>
  );
};

export default TodoItem;
