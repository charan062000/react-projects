// src/components/Filter.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todos/todoSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  const filters = ["ALL", "COMPLETED", "INCOMPLETE"];

  return (
    <div className="mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          className={`mr-2 px-3 py-1 rounded ${
            currentFilter === f ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
