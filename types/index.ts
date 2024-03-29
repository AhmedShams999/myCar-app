import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchMenuFacturerProps{
  selected: string,
  setSelected: (menuFacture: string)=> void;
}

export interface CarProps{
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  menuFacture:string,
  year:number,
  fuel:string,
  limit:number,
  model:string
}

export interface OptionProps {
  title: string,
  value: string
}

export interface CustomFiltersProps {
  title: string,
  options: OptionProps[],
  setFilter: any;
}

export interface ShowMoreProps{
  pageNumber: number,
  isNext: boolean,
  setLimit: any;
}