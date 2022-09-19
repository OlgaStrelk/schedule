import * as React from "react";
import { changeCategory } from "../store/filterSlice";
import { closeFilterPopup } from "../store/popupSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

interface IFilterItemProps {
  text: string;
}

export const FilterItem: React.FC<IFilterItemProps> = ({ text }) => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector((state) => state.filter.category);

  const handleClick = (): void => {
    dispatch(changeCategory(text));
    dispatch(closeFilterPopup());
  };

  return (
    <button
      className={
        currentCategory === text
          ? "popup__filter-item popup__filter-item_active"
          : "popup__filter-item"
      }
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
