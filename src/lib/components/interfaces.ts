import { MouseEvent } from "react";

export interface IResponsive {
  isTabletOrMobile: boolean;
}

export interface IItemsStyledProps {
  itemsLength: number;
  active: boolean;
}

interface ItemOnClick {
  handler?: () => void;
  index: number;
}

export interface IItemProps {
  item: IItemAttr;
  itemsLength: number;
  active: boolean;
  index: number;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  notifications?: number;
}

export interface IItemAttr {
  name: String;
  icon: any;
  handler?: () => void;
  notifications?: number;
}

export interface IVerticalNavbarProps {
  items: IItemAttr[];
}

export interface IVerticalNavbarStyledProps extends IResponsive {
  visible?: boolean;
}

export interface IVerticalNavbarController {
  setActiveItem: (item: number) => void;
  hideNavbar: () => void;
  showNavbar: () => void;
}
