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
    <li className="task" key={id}>
      <button
        className={
          complete
            ? "task__complete-btn task__complete-btn_checked"
            : "task__complete-btn"
        }
        type="button"
        onClick={() => dispatch(toggleComplete(id))}
      />
      <div className="task__texts">
        <h2 className="task__title">{subject}</h2>
        <p
          className="task__description"
          style={{
            textDecoration: complete ? "line-through" : "",
          }}
        >
          {task}
        </p>
      </div>
      <div className='task__btn-background'>
      <button
        className="task__remove-btn"
        type="button"
        onClick={() => dispatch(deleteTodo(id))}
      /></div>
    </li>
  );
};
