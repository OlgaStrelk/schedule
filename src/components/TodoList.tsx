import * as React from "react";
import { useAppSelector } from "../utils/hooks";
import { TodoItem } from "./TodoItem";
import "../styles/TodoList.css";

interface ITodoListProps {}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const isOpen = useAppSelector((state) => state.popup.isFilterOpen);
  const todos = useAppSelector((state) => state.todos.list);
  const sortedTodos = useAppSelector((state) => state.todos.sortedList);
  return (
    <ul className="list">
      {isOpen
        ? sortedTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)
        : todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  );
};
