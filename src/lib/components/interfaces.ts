import { ReactNode } from 'react'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

export interface INavbarPieces extends ICommonProps{
	isMobileOrTablet: boolean
}

export interface INavbarResponsive extends INavbarPieces {
	amountOfItems: number
}

export interface INavbarResponsiveItem extends INavbarResponsive {
	isActive: boolean
}

export interface INavbarItemProps extends INavbarResponsiveItem {
	item: IItemProps
	onClick: () => void
}

export interface IItemProps {
	icon: ReactNode
	name: string
	handler?: () => void
}

export interface INavbarProps extends ICommonProps {
	/**
	 * The items props defines all icons and items that will be displayed in along the navbar.
	 */
	items: Array<IItemProps>,
	/**
	 * The logo props defines a logo that will be displayed at the top of navbar. It's hidden when navbar is horizontal. (Responsive mode)
	 */
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
