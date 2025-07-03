import counterReducer from "../features/Counter/CounterSlice";
import todoReducer from '../features/todos/todoSlice'
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});

