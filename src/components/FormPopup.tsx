import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { addTodo } from "../store/todoSlice";
import { closeFormPopup } from '../store/popupSlice';

interface IFormPopupProps {}
type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.FormEvent<HTMLInputElement>;

export const FormPopup: React.FC<IFormPopupProps> = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.popup.isFormOpen);

  const [subject, setSubject] = useState<string>("");
  const [task, setTask] = useState<string>("");

  const changeSubject = (e: InputElement): void => {
    const target = e.target as HTMLInputElement;
    setSubject(target.value);
  };

  const changeTask = (e: InputElement): void => {
    const target = e.target as HTMLInputElement;
    setTask(target.value);
  };

  const handleSubmit = (e: FormElement): void => {
    let data = [ subject, task ]
    e.preventDefault();
    dispatch(addTodo(data));
    dispatch(closeFormPopup())
  };
  return (
    <div className={isOpen ? "popup popup_is-opened" : "popup"}>
      <div className="popup__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={subject}
            onChange={changeSubject}
            required
          />
          <input type="text" value={task} onChange={changeTask} required />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};
