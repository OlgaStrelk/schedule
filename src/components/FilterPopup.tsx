import * as React from "react";
import { useAppSelector } from "../utils/hooks";
import { FilterItem } from "./FilterItem";
import "../styles/FilterPopup.css";
import { ALL_TODOS, COMPLETE_TODOS, UNCOMPLETE_TODOS } from '../utils/consts';

interface IFilterPopupProps {}

export const FilterPopup: React.FC<IFilterPopupProps> = (props) => {
  const isOpen = useAppSelector((state) => state.popup.isFilterOpen);

  return (
    <div className={isOpen ? "popup popup_is-opened" : "popup"}>
      <div className="popup__container">
        <FilterItem text={ALL_TODOS} />
        <FilterItem text={COMPLETE_TODOS} />
        <FilterItem text={UNCOMPLETE_TODOS} />
      </div>
    </div>
  );
};
