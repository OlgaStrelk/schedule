import * as React from "react";
import { useAppSelector } from "../utils/hooks";
import { FilterItem } from "./FilterItem";
import '../styles/FilterPopup.css'

interface IFilterPopupProps {}

export const FilterPopup: React.FC<IFilterPopupProps> = (props) => {
  const isOpen = useAppSelector((state) => state.popup.isFilterOpen);

  return (
    <div className={isOpen ? "popup popup_is-opened" : "popup"}>
      <div className="popup__container">
        <FilterItem text="Показать все задания" category="all" />
        <FilterItem text="Выполненные" category="complete" />
        <FilterItem text="Не выполненные" category="uncomplete" />
      </div>
    </div>
  );
};
