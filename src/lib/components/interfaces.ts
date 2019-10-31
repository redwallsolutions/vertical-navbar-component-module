import { ReactNode } from 'react'

export interface IThemeProps {
	mode: string
}

export interface ICommonProps {
	theme?: IThemeProps
	appearance: "default" | "primary" | "secondary"
}

export interface IStyledComponentsProps extends ICommonProps {
	isMobileOrTablet: boolean
}

export interface IStyledNavbarItemProps extends IStyledComponentsProps {
	amountOfItems: number
	isActive?: boolean
}

export interface INavbarComponentItemProps extends IStyledNavbarItemProps {
	item: IItemProps
	onClick: () => void
}

export interface IItemProps {
	icon: ReactNode
	name: string
	handler?: () => void
}

export interface IVerticalNavbarComponentProps extends ICommonProps {
    items: Array<IItemProps>,
    logo:string
}

export interface IVerticalNavbarComponentHeaderProps {
	logo: string
}

export interface IVerticalNavbarController {
    setActiveItem:(item:number)=>void
    startLoading:()=>void
    finishLoading:()=>void
}
