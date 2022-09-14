import * as React from "react";
import { FilterItem } from "./FilterItem";
import "../styles/FilterPopup.css";
import { useAppSelector } from "../utils/hooks";

interface IFilterPopupProps {}

export const FilterPopup: React.FC<IFilterPopupProps> = (props) => {
  const isOpen = useAppSelector((state) => state.popup.isFilterOpen);
  return (
    <div className={isOpen ? "popup popup_is-opened" : "popup"}>
      {/* <div className="popup__container"> */}
        <FilterItem text="Показать все задания" />
        <FilterItem text="Выполненные" />
        <FilterItem text="Не выполненные" />
      {/* </div> */}
    </div>
  );
};
