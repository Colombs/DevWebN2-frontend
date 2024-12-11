// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [hora, setHora] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { hora, nome, descricao, observacao };
    addTodo(newTodo);
    setHora('');
    setNome('');
    setDescricao('');
    setObservacao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Hora"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome da Atividade"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Observação (opcional)"
        value={observacao}
        onChange={(e) => setObservacao(e.target.value)}
      />
      <button type="submit" disabled={!hora || !nome || !descricao}>Adicionar Atividade</button>
    </form>
  );
};

export default TodoForm;
