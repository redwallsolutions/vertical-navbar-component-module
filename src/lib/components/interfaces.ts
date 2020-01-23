import { ReactNode } from 'react'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

export interface INavbarPieces extends ICommonProps {
	isMobileOrTablet: boolean
	isNavVisible?: boolean
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
	 * The items prop is an Array of  `IItemProps`  that defines all items to be displayed along the navbar.
	 * Each item in the array consists of:
	 *
	 * - `name:string`
	 * - `icon:ReactNode`
	 * - `handler:Function`
	 *
	 * Example:  `items: [{name: 'Dashboard', icon: <DashboardIcon/>, handler: ()=>console.log('dashboard clicked')}]`
	 */
	items: IItemProps[]
	/**
	 * The logo prop defines an image logo that will be displayed at the top of navbar. It's hidden when navbar is horizontal. (Responsive mode)
	 */
	logo: string
}

export interface IVerticalNavbarComponentHeaderProps {
	logo: string
}

export interface IVerticalNavbarController {
	setActiveItem: (item: number) => void
	startLoading: () => void
	finishLoading: () => void
	showNavbar: () => void
	hideNavbar: () => void
}
