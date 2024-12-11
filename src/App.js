import React, { useState } from 'react';
import './App.css';

// Componente principal
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>Agenda de Compromissos</h1>
      <TodoForm addTask={addTask} />
      <TodoTable tasks={tasks} />
    </div>
  );
}

// Componente do Formulário
function TodoForm({ addTask }) {
  const [hora, setHora] = useState('');
  const [oque, setOque] = useState('');
  const [descricao, setDescricao] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { hora, oque, descricao, observacao };
    addTask(newTask);
    setHora('');
    setOque('');
    setDescricao('');
    setObservacao('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="HRS"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="O que"
        value={oque}
        onChange={(e) => setOque(e.target.value)}
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
        placeholder="Obs (opcional)"
        value={observacao}
        onChange={(e) => setObservacao(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

// Componente da Tabela
function TodoTable({ tasks }) {
  return (
    <div className="todo-table">
      <div className="table-header">
        <span>HRS</span>
        <span>O QUE</span>
        <span>DESCRIÇÃO</span>
        <span>OBS</span>
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="table-row">
          <span>{task.hora}</span>
          <span>{task.oque}</span>
          <span>{task.descricao}</span>
          <span>{task.observacao}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
