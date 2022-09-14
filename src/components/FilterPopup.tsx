import * as React from 'react';
import { FilterItem } from './FilterItem';


interface IFilterPopupProps {
}

export const FilterPopup: React.FC<IFilterPopupProps> = (props) => {
	let isOpen = false
	return (
		<div className={isOpen ? "popup popup_is-opened" : "popup"}>
		<div className="popup__container">
		  <FilterItem text="Показать все задания" />
		  <FilterItem text="Выполненные" />
		  <FilterItem text="Не выполненные" />
		</div>
	  </div>
	);
};
