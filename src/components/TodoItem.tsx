import * as React from "react";
import { useAppDispatch } from "../utils/hooks";
import { deleteTodo, toggleComplete } from "../store/todoSlice";

interface ITodoItemProps {
  id: number;
  complete: boolean;
  subject: string;
  task: string;
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  complete,
  subject,
  task,
}) => {
  const dispatch = useAppDispatch();
  return (
    <li key={id}>
      <button type="button" onClick={() => dispatch(toggleComplete(id))}>
        {complete ? "Incomplete" : "Complete"}
      </button>
      <h2>{subject}</h2>
      <p
        style={{
          textDecoration: complete ? "line-through" : "",
        }}
      >
        {task}
      </p>
      <button type="button" onClick={() => dispatch(deleteTodo(id))} />
    </li>
  );
};
