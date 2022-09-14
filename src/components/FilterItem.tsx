import * as React from "react";

interface IFilterItemProps {
  text: string;
}

export const FilterItem: React.FC<IFilterItemProps> = ({ text }) => {
  return <button>{text}</button>;
};
