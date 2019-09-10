import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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
import { useMediaQuery } from 'react-responsive'

function VerticalNavbarHeader({ logo, smallLogo, title, slogan }) {
	return (
		<VerticalNavbarHeaderStyled>
			<img src={logo} />
		</VerticalNavbarHeaderStyled>
	)
}

function VerticalNavbarItem({ appearance, item, onClick, isActive, isSmall }) {
	return (
		<VerticalNavbarItemStyled
			appearance={appearance}
			onClick={onClick}
			isActive={isActive}
			isSmall={isSmall}
		>
			<i>{item.icon}</i>
			{isSmall && <p>{item.name}</p>}
		</VerticalNavbarItemStyled>
	)
}

function VerticalNavbarComponent({
	items = [],
	logo,
	smallLogo,
	title,
	slogan,
	appearance = 'default',
	children
}) {
	const controller = useVerticalNavbarController()
	const [activeItem, setActiveItem] = useState(1)
	useEffect(() => {
		controller.setActiveItem = setActiveItem
	}, [controller])
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	function onClickItem({ item, index }) {
		return function() {
			setActiveItem(index + 1)
			if(item.handler){
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
							item={item}
							isActive={activeItem === index + 1}
							onClick={onClickItem({ item, index })}
							appearance={appearance}
							isSmall={isTabletOrMobile}
						/>
					))}
				</VerticalNavbarStyled>
			</VerticalNavbarScrollWrapper>
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
	smallLogo: PropTypes.string,
	title: PropTypes.string,
	slogan: PropTypes.string
}

export default VerticalNavbarComponent
