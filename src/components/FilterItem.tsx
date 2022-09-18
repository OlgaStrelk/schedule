import * as React from "react";
import { changeCategory } from '../store/filterSlice';
import { useAppDispatch } from "../utils/hooks";

interface IFilterItemProps {
  text: string;
}

export const FilterItem: React.FC<IFilterItemProps> = ({ text }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(changeCategory(text));
      }}
    >
      {text}
    </button>
  );
};
