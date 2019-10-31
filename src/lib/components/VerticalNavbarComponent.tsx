import React, { useState, useContext } from 'react'
import Tooltip from 'react-tooltip'
import { useMediaQuery } from 'react-responsive'
import { ThemeContext } from 'styled-components'
import VerticalNavbarContext from './VerticalNavbarContext'
import {
	VerticalNavbarItemStyled,
	VerticalNavbarContainer,
	VerticalNavbarStyled,
	ContentContainer,
	Reset,
	VerticalNavbarHeaderStyled,
	VerticalNavbarScrollWrapper
} from './Style'
import LoadingBar from '@redwallsolutions/loading-bar-component-module'
import {
	IVerticalNavbarComponentProps,
	IVerticalNavbarComponentHeaderProps,
	INavbarComponentItemProps
} from './interfaces'

const VerticalNavbarHeader: React.FC<IVerticalNavbarComponentHeaderProps> = ({
	logo
}) => (
	<VerticalNavbarHeaderStyled>
		<img src={logo} alt="Some small logo here." />
	</VerticalNavbarHeaderStyled>
)

const VerticalNavbarItem: React.FC<INavbarComponentItemProps> = ({
	appearance,
	item,
	onClick,
	isActive,
	isMobileOrTablet,
	amountOfItems
}) => {
	return (
		<VerticalNavbarItemStyled
			appearance={appearance}
			onClick={onClick}
			isActive={isActive}
			isMobileOrTablet={isMobileOrTablet}
			data-tip={item.name}
			amountOfItems={amountOfItems}
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

const VerticalNavbarComponent: React.FC<IVerticalNavbarComponentProps> = ({
	items = [],
	logo,
	appearance = 'default',
	children
}) => {
	const [activeItem, setActiveItem] = useState(1)
	const [loadingProgress, setLoadingProgress] = useState(0)
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' })
	const theme = useContext(ThemeContext)

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

	const onFinished = async (finished: Promise<boolean>) => {
		await finished
		setLoadingProgress(-1)
		setLoadingProgress(0)
	}
	return (
		<VerticalNavbarContext.Provider
			value={{ setActiveItem, startLoading, finishLoading }}
		>
			<VerticalNavbarContainer className="vertical-navbar-component-module">
				<Reset />
				<VerticalNavbarScrollWrapper
					isMobileOrTablet={isMobileOrTablet}
					appearance={appearance}
				>
					<VerticalNavbarStyled
						appearance={appearance}
						isMobileOrTablet={isMobileOrTablet}
						amountOfItems={items.length}
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
							/>
						))}
					</VerticalNavbarStyled>
				</VerticalNavbarScrollWrapper>
				{!isMobileOrTablet && (
					<Tooltip
						place="right"
						effect="solid"
						type={theme.mode === 'light' ? 'dark' : 'light'}
						className="vertical-navbar-tooltip"
					/>
				)}
				<ContentContainer
					appearance={appearance}
					isMobileOrTablet={isMobileOrTablet}
				>
					{children}
				</ContentContainer>
			</VerticalNavbarContainer>
			<LoadingBar
				progress={loadingProgress}
				onFinish={onFinished}
				appearance={appearance}
			/>
		</VerticalNavbarContext.Provider>
	)
}

export default VerticalNavbarComponent
