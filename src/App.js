import React, { useState } from 'react';
import './App.css';

// Componente principal
function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // Para edição de tarefas

  // Adiciona uma nova tarefa
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Atualiza uma tarefa existente
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null); // Reseta o estado de edição
  };

  // Exclui uma tarefa
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Agenda de Compromissos</h1>
      <TodoForm 
        addTask={addTask} 
        updateTask={updateTask} 
        editingTask={editingTask} 
      />
      <TodoTable tasks={tasks} deleteTask={deleteTask} setEditingTask={setEditingTask} />
    </div>
  );
}

// Componente do Formulário
function TodoForm({ addTask, updateTask, editingTask }) {
  const [dia, setDia] = useState(editingTask ? editingTask.dia : '');
  const [hora, setHora] = useState(editingTask ? editingTask.hora : '');
  const [descricao, setDescricao] = useState(editingTask ? editingTask.descricao : '');
  const [observacao, setObservacao] = useState(editingTask ? editingTask.observacao : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: editingTask ? editingTask.id : Date.now(), dia, hora, descricao, observacao };
    
    if (editingTask) {
      updateTask(newTask); // Atualiza tarefa existente
    } else {
      addTask(newTask); // Adiciona uma nova tarefa
    }

    // Reseta os campos
    setDia('');
    setHora('');
    setDescricao('');
    setObservacao('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Dia"
        value={dia}
        onChange={(e) => setDia(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Hora"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
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
      <button type="submit">{editingTask ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
}

// Componente da Tabela
function TodoTable({ tasks, deleteTask, setEditingTask }) {
  return (
    <div className="todo-table">
      <div className="table-header">
        <span>Dia</span>
        <span>Hora</span>
        <span>Descrição</span>
        <span>Observação</span>
        <span>Ações</span> {/* Nova coluna para botões de ação */}
      </div>
      {tasks.map((task) => (
        <div key={task.id} className="table-row">
          <span>{task.dia}</span>
          <span>{task.hora}</span>
          <span>{task.descricao}</span>
          <span>{task.observacao}</span>
          <span>
            <button onClick={() => setEditingTask(task)}>Editar</button>
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;

