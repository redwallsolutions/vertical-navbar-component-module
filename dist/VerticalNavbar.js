import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { NavbarContainer, VerticalNavbarStyled, NavBarHeaderItem, NavbarDivider, NavbarItemTextContainer, NavbarItemTitle, NavbarItemSubtitle, NavbarItemIconContainer, Content, DefaultFont } from './Style';
import NavbarItem from './NavbarItem';
import NavbarToggler from './NavbarToggler';
import logoImg from './assets/img/redwall-logo.png';
import logoImgSmall from './assets/img/redwall-logo-small.png';

var VerticalNavbar =
/*#__PURE__*/
function (_Component) {
  _inherits(VerticalNavbar, _Component);

  function VerticalNavbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VerticalNavbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VerticalNavbar)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
          logoImgSmall = headerItem.logoImgSmall;
      return React.createElement(React.Fragment, null, React.createElement(NavBarHeaderItem, _this.state, React.createElement("img", {
        src: _this.state.isShown ? logoImg : logoImgSmall,
        alt: "Navbar Header Item",
        style: {
          height: '100%'
        }
      })), React.createElement(NavbarDivider, null));
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
          title: "Oi"
        }, item.title), React.createElement(NavbarItemSubtitle, {
          title: item.subTitle
        }, item.subTitle)) : '');
      });
    };

    return _this;
  }

  _createClass(VerticalNavbar, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(DefaultFont, null), React.createElement(NavbarContainer, null, React.createElement(VerticalNavbarStyled, this.state, this.buildNavbarHeaderItem(), this.buildNavbarItems()), React.createElement(NavbarToggler, Object.assign({
        onClick: this.toggleNavbar
      }, this.state)), React.createElement(Content, null, this.props.children)));
    }
  }]);

  return VerticalNavbar;
}(Component);

VerticalNavbar.defaultProps = {
  isShown: true,
  headerItem: {
    logoImg: logoImg,
    logoImgSmall: logoImgSmall
  }
};
export default VerticalNavbar;