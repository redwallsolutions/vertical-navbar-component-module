import React, {
  useState,
  useContext,
  FC,
  HTMLAttributes,
  useCallback,
} from "react";
import Ink from "@redwallsolutions/react-ink";
import { useMediaQuery } from "react-responsive";
import { ICommonProps } from "@redwallsolutions/common-interfaces-ts";
import VerticalNavbarContext from "./VerticalNavbarContext";
import { ThemeContext } from "styled-components";
import { VerticalNavbarContainer, Navbar, Content, Item } from "./Style";
import {
  IVerticalNavbarProps,
  IItemProps,
  IResponsive
} from "./interfaces";

const ItemComponent: FC<IItemProps & IResponsive & ICommonProps> = ({
  item,
  isTabletOrMobile,
  index,
  itemsLength,
  active,
  onClick,
  theme,
  appearance,
}) => {
  const innerOnClick = useCallback(() => {
    onClick({ handler: item.handler, index });
  }, []);
  return (
    <Item
      onClick={innerOnClick}
      role="button"
      itemsLength={itemsLength}
      isTabletOrMobile={isTabletOrMobile}
      active={active}
      theme={theme}
      appearance={appearance}
    >
      <div>
        {item.icon}
        {isTabletOrMobile && <small>{item.name}</small>}
      </div>
      <Ink radius={70} duration={1200} opacity={0.1} background={false} />
    </Item>
  );
};

const defaultTheme = {
  mode: "light",
};

const VerticalNavbarComponent: FC<IVerticalNavbarProps &
  ICommonProps &
  HTMLAttributes<HTMLDivElement>> = ({
  items = [],
  children,
  className,
  theme,
  appearance = "default",
}) => {
  const themeToApply = theme || useContext(ThemeContext) || defaultTheme;

  const [activeItem, setActiveItem] = useState(-1);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const onClickItem = useCallback(({ handler, index }) => {
    setActiveItem(index);
    if (handler) {
      handler();
    }
  }, []);

  const hideNavbar = useCallback(() => {
    setNavbarVisible(false);
  }, []);
  const showNavbar = useCallback(() => {
    setNavbarVisible(true);
  }, []);

  return (
    <VerticalNavbarContext.Provider
      value={{
        setActiveItem,
        hideNavbar,
        showNavbar,
      }}
    >
      <VerticalNavbarContainer
        className={className}
        isTabletOrMobile={isTabletOrMobile}
      >
        <Navbar
          isTabletOrMobile={isTabletOrMobile}
          theme={themeToApply}
          appearance={appearance}
          visible={navbarVisible}
        >
          {items.map((item, index) => (
            <ItemComponent
              itemsLength={items.length}
              item={item}
              key={index}
              index={index}
              onClick={onClickItem}
              theme={themeToApply}
              appearance={appearance}
              isTabletOrMobile={isTabletOrMobile}
              active={index === activeItem}
            />
          ))}
        </Navbar>
        <Content theme={themeToApply} appearance={appearance}>
          {children}
        </Content>
      </VerticalNavbarContainer>
    </VerticalNavbarContext.Provider>
  );
};

export default VerticalNavbarComponent;
