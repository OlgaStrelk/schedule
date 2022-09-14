import * as React from "react";
import { useAppSelector } from '../utils/hooks';
import { TodoItem } from './TodoItem';

interface ITodoListProps {}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const todos = useAppSelector((state) => state.todos.list);
  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
