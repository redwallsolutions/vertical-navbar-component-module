import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavbarContainer, VerticalNavbarStyled, NavBarHeaderItem, NavbarDivider, NavbarItemTextContainer, NavbarItemTitle, NavbarItemSubtitle, NavbarItemIconContainer, Content, DefaultFont, NavbarHeaderItemImage, NavbarHeaderItemSubtitle } from './Style';
import NavbarItem from './NavbarItem';
import NavbarToggler from './NavbarToggler';
import logoImg from './assets/img/redwall-logo.png';
import logoImgSmall from './assets/img/redwall-logo-small.png';

var VerticalNavbarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(VerticalNavbarComponent, _Component);

  function VerticalNavbarComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VerticalNavbarComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VerticalNavbarComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      activeItem: -1,
      isShown: true
    };

    _this.toggleNavbar = function () {
      _this.setState({
        isShown: !_this.state.isShown
      });
    };

    _this.onClickItem = function (item) {
      _this.setState({
        activeItem: item.id
      });

      if (item.onClick) {
        var onClick = item.onClick,
            rest = _objectWithoutProperties(item, ["onClick"]);

        onClick(rest);
      }
    };

    _this.buildNavbarHeaderItem = function () {
      var headerItem = _this.props.headerItem;
      var logoImg = headerItem.logoImg,
          logoImgSmall = headerItem.logoImgSmall,
          subtitle = headerItem.subtitle;
      var isShown = _this.state.isShown;
      return React.createElement(React.Fragment, null, React.createElement(NavBarHeaderItem, {
        isShown: isShown
      }, React.createElement(NavbarHeaderItemImage, {
        src: isShown ? logoImg : logoImgSmall,
        alt: subtitle
      }), isShown && React.createElement(NavbarHeaderItemSubtitle, {
        title: subtitle
      }, subtitle)));
    };

    _this.buildNavbarItems = function () {
      var items = _this.props.items;

      var _this$state = _this.state,
          activeItem = _this$state.activeItem,
          rest = _objectWithoutProperties(_this$state, ["activeItem"]);

      return items.map(function (item, index) {
        return React.createElement(NavbarItem, Object.assign({}, rest, {
          isActive: activeItem === index,
          key: index,
          id: index,
          customOnClick: item.onClick,
          onClick: _this.onClickItem
        }), React.createElement(NavbarItemIconContainer, _this.state, item.icon), _this.state.isShown ? React.createElement(NavbarItemTextContainer, null, React.createElement(NavbarItemTitle, {
          title: item.title
        }, item.title), React.createElement(NavbarItemSubtitle, {
          title: item.subTitle
        }, item.subTitle)) : '');
      });
    };

    return _this;
  }

  _createClass(VerticalNavbarComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(NavbarContainer, {
        className: "vertical-navbar"
      }, React.createElement(VerticalNavbarStyled, this.state, this.buildNavbarHeaderItem(), this.buildNavbarItems()), React.createElement(NavbarToggler, Object.assign({
        onClick: this.toggleNavbar
      }, this.state)), React.createElement(Content, null, React.createElement("div", {
        style: {
          padding: '10px',
          paddingTop: '20px'
        }
      }, this.props.children))));
    }
  }]);

  return VerticalNavbarComponent;
}(Component);

VerticalNavbar.propTypes = {
  isShown: PropTypes.bool,
  headerItem: PropTypes.shape({
    logoImg: PropTypes.string,
    logoImgSmall: PropTypes.string
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element,
    title: PropTypes.string,
    subTitle: PropTypes.string
  }))
};
VerticalNavbar.defaultProps = {
  isShown: true,
  headerItem: {
    logoImg: logoImg,
    logoImgSmall: logoImgSmall,
    subtitle: 'The vertical navbar.'
  }
};
export default VerticalNavbarComponent;