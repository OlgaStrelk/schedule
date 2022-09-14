import * as React from "react";
import { openFilterPopup } from '../store/popupSlice';
import { useAppDispatch } from '../utils/hooks';

interface IFilterButtonProps {}

export const FilterButton: React.FC<IFilterButtonProps> = (props) => {
	const dispatch = useAppDispatch();
	return (
    <>
      <button className="btn_type_filter" type="button" onClick={() => dispatch(openFilterPopup())}>
        Показать все задания
      </button>
    </>
  );
};
