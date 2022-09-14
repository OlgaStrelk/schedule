import * as React from "react";

interface IFilterButtonProps {}

export const FilterButton: React.FC<IFilterButtonProps> = (props) => {
  const openPopup = () => {};
  return (
    <>
      <button className="btn_type_filter" type="button" onClick={openPopup}>
        Показать все задания
      </button>
    </>
  );
};
