function Todo({ todo, index, remove }) {
  function handle() {
    remove(index); //remove is a function to remove a component
  }

  return (
    <div className="todo">
      <i class="fas fa-angle-right"></i>
      {todo.text}
      <div onClick={handle}>
        <i class="fas fa-window-close"></i>
      </div>
    </div>
  );
}
