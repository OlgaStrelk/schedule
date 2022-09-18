import * as React from "react";
import { useAppDispatch } from "../utils/hooks";
import { deleteTodo, toggleComplete } from "../store/todoSlice";
import '../styles/TodoItem.css'

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
    <li className="task" key={id}>
      <button
        className="task__complete-btn"
        type="button"
        onClick={() => dispatch(toggleComplete(id))}
      >
        {complete ? "Incomplete" : "Complete"}
      </button>
      <h2 className="task__title">{subject}</h2>
      <p
        className="task__description"
        style={{
          textDecoration: complete ? "line-through" : "",
        }}
      >
        {task}
      </p>
      <button
        className="task__submit-btn"
        type="button"
        onClick={() => dispatch(deleteTodo(id))}
      />
    </li>
  );
};
