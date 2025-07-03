// src/components/TodoList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";

export default function TodoList() {
  const { todos, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") return true;
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "INCOMPLETE") return !todo.completed;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id} className="mb-2">
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-green-500" : ""
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="ml-4 text-red-500"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
