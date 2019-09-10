import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'react-tooltip'
import { useMediaQuery } from 'react-responsive'
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
import { useVerticalNavbarController } from './useVerticalNavbarController'
import redwallLogo from './assets/img/redwall-logo-small.png'

function VerticalNavbarHeader({ logo, smallLogo, title, slogan }) {
	return (
		<VerticalNavbarHeaderStyled>
			<img src={logo} />
		</VerticalNavbarHeaderStyled>
	)
}

function VerticalNavbarItem({
	appearance,
	item,
	onClick,
	isActive,
	isSmall,
	id
}) {
	return (
		<VerticalNavbarItemStyled
			appearance={appearance}
			onClick={onClick}
			isActive={isActive}
			isSmall={isSmall}
			data-tip={item.name}
		>
			<i>{item.icon}</i>
			{isSmall && <p>{item.name}</p>}
		</VerticalNavbarItemStyled>
	)
}

function VerticalNavbarComponent({
	items = [],
	logo = redwallLogo,
	appearance = 'default',
	children
}) {
	const controller = useVerticalNavbarController()
	const [activeItem, setActiveItem] = useState(1)
	useEffect(() => {
		controller.setActiveItem = setActiveItem
	}, [controller])
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	const theme = useContext(ThemeContext)

	function onClickItem({ item, index }) {
		return function() {
			setActiveItem(index + 1)
			if (item.handler) {
				item.handler()
			}
		}
	}
	return (
		<VerticalNavbarContainer className="vertical-navbar-component-module">
			<Reset />
			<VerticalNavbarScrollWrapper isSmall={isTabletOrMobile}>
				<VerticalNavbarStyled
					appearance={appearance}
					isSmall={isTabletOrMobile}
					amountOfItems={items.length}
				>
					{!isTabletOrMobile && <VerticalNavbarHeader logo={logo} />}
					{items.map((item, index) => (
						<VerticalNavbarItem
							key={index}
							id={`item-${index}`}
							item={item}
							isActive={activeItem === index + 1}
							onClick={onClickItem({ item, index })}
							appearance={appearance}
							isSmall={isTabletOrMobile}
						/>
					))}
				</VerticalNavbarStyled>
			</VerticalNavbarScrollWrapper>
			{!isTabletOrMobile && (
				<Tooltip
					place="right"
					effect="solid"
					type={theme.mode === 'light' ? 'dark' : 'light'}
					className="vertical-navbar-tooltip"
				/>
			)}
			<ContentContainer appearance={appearance} isSmall={isTabletOrMobile}>
				{children}
			</ContentContainer>
		</VerticalNavbarContainer>
	)
}

VerticalNavbarComponent.propTypes = {
	items: PropTypes.array,
	appearance: PropTypes.string,
	logo: PropTypes.string,
}

export default VerticalNavbarComponent
