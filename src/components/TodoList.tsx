import * as React from "react";
import { useAppSelector } from "../utils/hooks";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../store/todoSlice";
import { ALL_TODOS, COMPLETE_TODOS, UNCOMPLETE_TODOS } from '../utils/consts';

interface ITodoListProps {}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const category = useAppSelector((state) => state.filter.category);
  const todos = useAppSelector((state) => state.todos.list);

  let renderedTodos: ITodo[] = [];
  switch (category) {
    case COMPLETE_TODOS:
      renderedTodos = todos.filter((todo) => todo.complete === true);
      break;
    case  UNCOMPLETE_TODOS:
      renderedTodos = todos.filter((todo) => todo.complete === false);
      break;
    case ALL_TODOS:
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
