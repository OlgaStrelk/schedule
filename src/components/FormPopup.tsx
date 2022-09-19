import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { addTodo } from "../store/todoSlice";
import { closeFormPopup } from "../store/popupSlice";

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
    let data = [subject, task];
    e.preventDefault();
    dispatch(addTodo(data));
    dispatch(closeFormPopup());
    setSubject("");
    setTask("");
  };
  return (
    <div className={isOpen ? "popup popup_is-opened" : "popup"}>
      <div className="popup__container">
        <h3 className="popup__title">Добавить предмет</h3>
        <p className="popup__subtitle">Укажите заголовок и задание</p>
        <form className="popup__form" onSubmit={handleSubmit}>
          <input
            className="popup__input"
            type="text"
            placeholder='Заголовок'
            value={subject}
            onChange={changeSubject}
            required
          />
          <input
            className="popup__input"
            type="text"
            placeholder='Задание'
            value={task}
            onChange={changeTask}
            required
          />
          <button className="popup__btn" type="button">
            Отмена
          </button>
          <button className="popup__btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};
