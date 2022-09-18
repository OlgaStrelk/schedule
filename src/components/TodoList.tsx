import * as React from "react";
import { useAppSelector } from "../utils/hooks";
import { TodoItem } from "./TodoItem";
import "../styles/TodoList.css";
import { ITodo } from "../store/todoSlice";

interface ITodoListProps {}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const category = useAppSelector((state) => state.filter.category);
  const todos = useAppSelector((state) => state.todos.list);

  let renderedTodos: ITodo[] = [];
  switch (category) {
    case "Выполненные":
      renderedTodos = todos.filter((todo) => todo.complete === true);
      break;
    case "Не выполненные":
      renderedTodos = todos.filter((todo) => todo.complete === false);
      break;
    case "Показывать все задания":
      renderedTodos = todos;
      break;
  }

  return (
    <ul className="list">
      {renderedTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
