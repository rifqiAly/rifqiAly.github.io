import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface dataProps {
  data: any;
  isDataEmpty: boolean;
  searchSet: any;
  typeSet: any;
  periodSet: any;
}

export interface anyProps {
  data: any;
}

export interface detailProps {
  title: string;
  byline: string;
  abstract: string;
  published_date: string;
  media: any;
}
