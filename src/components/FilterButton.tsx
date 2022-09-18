import * as React from "react";
import { openFilterPopup } from "../store/popupSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import "../styles/FilterButton.css";
import { ALL_TODOS, COMPLETE_TODOS, UNCOMPLETE_TODOS } from "../utils/consts";

interface IFilterButtonProps {}

export const FilterButton: React.FC<IFilterButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.filter.category);

  return (
    <>
      <button
        className="btn_type_filter"
        type="button"
        onClick={() => dispatch(openFilterPopup())}
      >
        {category === ALL_TODOS
          ? ALL_TODOS
          : category === COMPLETE_TODOS
          ? COMPLETE_TODOS
          : category === UNCOMPLETE_TODOS
          ? UNCOMPLETE_TODOS
          : ""}
      </button>
    </>
  );
};
