import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { NavbarContainer, VerticalNavbarStyled, NavbarHeaderItem, NavbarItemTextContainer, NavbarItemTitle, NavbarItemSubtitle, NavbarItemIconContainer, Content, NavbarHeaderItemImage, NavbarHeaderItemSubtitle } from './Style';
import NavbarItem from './NavbarItem';
import NavbarToggler from './NavbarToggler';
import logoImg from './assets/img/redwall-logo.png';
import logoImgSmall from './assets/img/redwall-logo-small.png';
import Tooltip from 'react-tooltip';
export var MODES = {
  hidden: 1,
  partiallyShown: 2,
  totallyShown: 3
};

var VerticalNavbarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(VerticalNavbarComponent, _Component);

  function VerticalNavbarComponent(props) {
    var _this;

    _classCallCheck(this, VerticalNavbarComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalNavbarComponent).call(this, props));
    _this.state = {
      activeItem: -1,
      currentMode: MODES.partiallyShown
    };

    _this.isCurrentModeTotallyShown = function () {
      return _this.state.currentMode === MODES.totallyShown;
    };

    _this.isCurrentModePartiallyShown = function () {
      return _this.state.currentMode === MODES.partiallyShown;
    };

    _this.toggleNavbar = function () {
      var newMode = undefined;

      if (_this.state.currentMode !== MODES.hidden) {
        newMode = MODES.hidden;
        _this.previousMode = _this.state.currentMode;
      } else {
        newMode = _this.previousMode;
      }

      _this.setState({
        currentMode: newMode
      });
    };

    _this.sequentiallyToggle = function () {
      var currentMode = _this.state.currentMode;
      var newMode = currentMode;
      if (currentMode === MODES.hidden) newMode = MODES.partiallyShown;else if (currentMode === MODES.partiallyShown) newMode = MODES.totallyShown;else if (currentMode === MODES.totallyShown) newMode = MODES.hidden;

      _this.setState({
        currentMode: newMode
      });
    };

    _this.changeMode = function (newMode) {
      _this.setState({
        currentMode: newMode
      });
    };

    _this.hide = function () {
      _this.changeMode(MODES.hidden);
    };

    _this.showPartially = function () {
      _this.changeMode(MODES.partiallyShown);
    };

    _this.showTotally = function () {
      _this.changeMode(MODES.totallyShown);
    };

    _this.onSwipeLeft = function () {
      _this.changeMode(MODES.hidden);
    };

    _this.onSwipeRight = function () {
      _this.changeMode(MODES.totallyShown);
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

    _this.setItem = function (itemIndex) {
      _this.setState({
        activeItem: itemIndex
      });
    };

    _this.exposeVerticalNavbarController = function () {
      return {
        setItem: _this.setItem
      };
    };

    _this.buildNavbarHeaderItem = function () {
      var headerItem = _this.props.headerItem;
      var logoImg = headerItem.logoImg,
          logoImgSmall = headerItem.logoImgSmall,
          subtitle = headerItem.subtitle;
      var currentMode = _this.state.currentMode;
      var isTotallyShown = currentMode === MODES.totallyShown;
      return React.createElement(React.Fragment, null, React.createElement(NavbarHeaderItem, {
        currentMode: currentMode
      }, React.createElement(NavbarHeaderItemImage, {
        src: isTotallyShown ? logoImg : logoImgSmall,
        alt: subtitle,
        currentMode: currentMode
      }), isTotallyShown && React.createElement(NavbarHeaderItemSubtitle, {
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
          onClick: _this.onClickItem,
          notificationCount: item.notificationCount,
          "data-tip": item.title
        }), React.createElement(NavbarItemIconContainer, _this.state, item.icon), _this.isCurrentModeTotallyShown() ? React.createElement(NavbarItemTextContainer, null, React.createElement(NavbarItemTitle, {
          title: item.title
        }, item.title), React.createElement(NavbarItemSubtitle, {
          title: item.subTitle
        }, item.subTitle)) : null, _this.isCurrentModePartiallyShown() && React.createElement(Tooltip, {
          place: "right",
          effect: "solid",
          type: "dark",
          delayShow: 200
        }));
      });
    };

    _this.previousMode = MODES.hidden;
    return _this;
  }

  _createClass(VerticalNavbarComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getVerticalNavbarController(this.exposeVerticalNavbarController());
    }
  }, {
    key: "render",
    value: function render() {
      var currentMode = this.state.currentMode;
      return React.createElement(NavbarContainer, {
        className: "vertical-navbar"
      }, React.createElement(VerticalNavbarStyled, this.state, this.buildNavbarHeaderItem(), this.buildNavbarItems()), React.createElement(NavbarToggler, {
        onClick: this.sequentiallyToggle,
        onSwipeLeft: this.onSwipeLeft,
        onSwipeRight: this.onSwipeRight,
        currentMode: currentMode
      }), React.createElement(Content, {
        currentMode: currentMode
      }, this.props.children));
    }
  }]);

  return VerticalNavbarComponent;
}(Component);

VerticalNavbarComponent.defaultProps = {
  isShown: true,
  headerItem: {
    logoImg: logoImg,
    logoImgSmall: logoImgSmall,
    subtitle: 'The vertical navbar.'
  }
};
export default VerticalNavbarComponent;