import React, { useState, useContext } from 'react'
import Tooltip from 'react-tooltip'
import { useMediaQuery } from 'react-responsive'
import VerticalNavbarContext from './VerticalNavbarContext'
import { ThemeContext } from 'styled-components'
import {
	VerticalNavbarItemStyled,
	VerticalNavbarContainer,
	VerticalNavbarStyled,
	ContentContainer,
	Reset,
	VerticalNavbarHeaderStyled,
	VerticalNavbarScrollWrapper
} from './Style'
import LoadingBar from '@redwallsolutions/loadingbar-component-module'
import {
	IVerticalNavbarComponentHeaderProps,
	INavbarItemProps,
	INavbarProps
} from './interfaces'

const VerticalNavbarHeader: React.FC<IVerticalNavbarComponentHeaderProps> = ({
	logo
}) => (
	<VerticalNavbarHeaderStyled>
		<img src={logo} alt="Some small logo here." />
	</VerticalNavbarHeaderStyled>
)

const VerticalNavbarItem: React.FC<INavbarItemProps> = ({
	appearance,
	item,
	onClick,
	isActive,
	isMobileOrTablet,
	amountOfItems,
	theme
}) => {
	return (
		<VerticalNavbarItemStyled
			appearance={appearance}
			onClick={onClick}
			isActive={isActive}
			isMobileOrTablet={isMobileOrTablet}
			data-tip={item.name}
			amountOfItems={amountOfItems}
			theme={theme}
		>
			<i>{item.icon}</i>
			{isMobileOrTablet && <p>{item.name}</p>}
		</VerticalNavbarItemStyled>
	)
}

let interval: any
const clearIntervalIfExists = () => {
	if (interval) clearInterval(interval)
}

const VerticalNavbarComponent: React.FC<INavbarProps> = ({
	appearance = 'default',
	items = [],
	logo,
	theme = { mode: 'light' },
	children
}) => {
	const [activeItem, setActiveItem] = useState(1)
	const [loadingProgress, setLoadingProgress] = useState(0)
	const [isVisible, setIsVisible] = useState(true)
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' })
	const themeToApply = useContext(ThemeContext) || theme

	const onClickItem: (props: any) => () => void = ({ item, index }) => {
		return function() {
			setActiveItem(index + 1)
			if (item.handler) {
				item.handler()
			}
		}
	}

	const startLoading = () => {
		clearIntervalIfExists()
		let prevLoadingProgress: number = 10
		setLoadingProgress(prevLoadingProgress)
		interval = setInterval(() => {
			prevLoadingProgress += Math.random() * 10
			if (prevLoadingProgress > 99) clearIntervalIfExists()
			else setLoadingProgress(prevLoadingProgress)
		}, 500)
	}

	const finishLoading = () => {
		clearIntervalIfExists()
		setLoadingProgress(100)
	}

	const hideNavbar = () => {
		setIsVisible(false)
	}
	const showNavbar = () => {
		setIsVisible(true)
	}

	const onFinished = async (finished: Promise<void>) => {
		await finished
		setLoadingProgress(-1)
		setLoadingProgress(0)
	}
	return (
		<VerticalNavbarContext.Provider
			value={{
				setActiveItem,
				startLoading,
				finishLoading,
				showNavbar,
				hideNavbar
			}}
		>
			<VerticalNavbarContainer className="vertical-navbar-component-module">
				<Reset />
				{isVisible && (
					<>
						<VerticalNavbarScrollWrapper
							isMobileOrTablet={isMobileOrTablet}
							appearance={appearance}
						>
							<VerticalNavbarStyled
								appearance={appearance}
								isMobileOrTablet={isMobileOrTablet}
								amountOfItems={items.length}
								theme={themeToApply}
							>
								{!isMobileOrTablet && <VerticalNavbarHeader logo={logo} />}
								{items.map((item, index) => (
									<VerticalNavbarItem
										key={index}
										item={item}
										isActive={activeItem === index + 1}
										onClick={onClickItem({ item, index })}
										appearance={appearance}
										isMobileOrTablet={isMobileOrTablet}
										amountOfItems={items.length}
										theme={themeToApply}
									/>
								))}
							</VerticalNavbarStyled>
						</VerticalNavbarScrollWrapper>
						{!isMobileOrTablet && (
							<Tooltip
								place="right"
								effect="solid"
								type={themeToApply.mode === 'light' ? 'dark' : 'light'}
								className="vertical-navbar-tooltip"
							/>
						)}
					</>
				)}
				<ContentContainer
					appearance={appearance}
					isMobileOrTablet={isMobileOrTablet}
					theme={theme}
					isNavVisible={isVisible}
				>
					{children}
				</ContentContainer>
				<LoadingBar
					progress={loadingProgress}
					appearance={appearance}
					theme={themeToApply}
					onFinish={onFinished}
				/>
			</VerticalNavbarContainer>
		</VerticalNavbarContext.Provider>
	)
}

export default VerticalNavbarComponent
