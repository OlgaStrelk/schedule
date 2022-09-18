import * as React from "react";
import { filterTodos } from "../store/todoSlice";
import { useAppDispatch } from "../utils/hooks";

interface IFilterItemProps {
  text: string;
  category: string;
}

export const FilterItem: React.FC<IFilterItemProps> = ({ text, category }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(filterTodos(category));
      }}
    >
      {text}
    </button>
  );
};
