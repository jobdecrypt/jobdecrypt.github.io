/* -----  Refactor - Form Component  ----- */
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build todo app",
      isCompleted: false,
    },
    {
      text: "Afternoon workout",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <container>
      <div className="app">
        <h1 class="p-2 text-center text-white bg-dark mb-4 rounded">
          To-do list
        </h1>

        <div className="d-flex justify-content-center ">
          {/* added some styles targeting the CSS file */}
          <div className="flex todo-list">
            {/* added some styles targeting the CSS file */}
            {todos.map((todo, i) => (
              <Todo index={i} id={i} todo={todo} remove={removeTodo} />
            ))}
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </div>
    </container>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
