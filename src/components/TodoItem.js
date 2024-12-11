const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="todo-item">
      <p><strong>Hora:</strong> {todo.hora}</p>
      <p><strong>Nome:</strong> {todo.descricao}</p>
      <p><strong>Descrição:</strong> {todo.descricao}</p>
      <p><strong>Observação:</strong> {todo.observacao}</p>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default TodoItem;
