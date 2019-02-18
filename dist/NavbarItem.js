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

  function NavbarItem(props) {
    var _this;

    _classCallCheck(this, NavbarItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavbarItem).call(this, props));

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
      var isShown = this.props.isShown;
      return React.createElement(NavbarItemStyled, Object.assign({}, this.props, {
        onClick: this.onClick
      }), this.props.children, React.createElement(NavbarItemBadge, {
        isShown: isShown
      }, "99+"));
    }
  }]);

  return NavbarItem;
}(PureComponent);

export default NavbarItem;