import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import { NavbarItemStyled, NavbarItemBadge } from './Style';

var NavbarItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NavbarItem, _PureComponent);

  function NavbarItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavbarItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavbarItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function (e) {
      _this.props.onClick(_objectSpread({
        id: _this.props.id,
        onClick: _this.props.customOnClick
      }, e));
    };

    return _this;
  }

  _createClass(NavbarItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentMode = _this$props.currentMode,
          notificationCount = _this$props.notificationCount;
      return React.createElement(NavbarItemStyled, Object.assign({}, this.props, {
        onClick: this.onClick
      }), this.props.children, notificationCount && React.createElement(NavbarItemBadge, {
        currentMode: currentMode
      }, notificationCount));
    }
  }]);

  return NavbarItem;
}(PureComponent);

export default NavbarItem;