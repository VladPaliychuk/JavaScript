import { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Придбати продукти", done: false },
    { id: 2, text: "Прибрати в кімнаті", done: false },
    { id: 3, text: "Помити посуд", done: false },
  ]);
  const [editTodoId, setEditTodoId] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleCheckboxChange = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDeleteClick = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleEditClick = (todoId) => {
    setEditTodoId(todoId);
    const todoToEdit = todos.find((todo) => todo.id === todoId);
    setInputValue(todoToEdit.text);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editTodoId ? { ...todo, text: inputValue } : todo
      )
    );
    setEditTodoId(null);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Додати завдання</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleCheckboxChange(todo.id)}
              />
              <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                {todo.text}
              </span>
            </label>
            {!todo.done && (
              <>
                <button onClick={() => handleEditClick(todo.id)}>Редагувати</button>
                <button onClick={() => handleDeleteClick(todo.id)}>Видалити</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {editTodoId && (
        <form onSubmit={handleEditSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Зберегти</button>
        </form>
      )}
    </div>
  );
}

export default TodoList;