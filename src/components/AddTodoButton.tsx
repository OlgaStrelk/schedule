import * as React from "react";
import { useAppDispatch } from "../utils/hooks";
import { openFormPopup } from "../store/popupSlice";

interface IAddTodoButtonProps {}

export const AddTodoButton: React.FC<IAddTodoButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        className="btn_type_add"
        type="button"
        onClick={() => dispatch(openFormPopup())}
      >
        Добавить
      </button>
    </>
  );
};
