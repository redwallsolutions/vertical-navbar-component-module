import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import { NavbarTogglerStyled, HumbBar } from './Style';

var NavbarToggler =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NavbarToggler, _PureComponent);

  function NavbarToggler() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavbarToggler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavbarToggler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.buildHumbBars = function () {
      var humbClasses = ['top', 'middle', 'bottom'];
      return humbClasses.map(function (humbClass) {
        return React.createElement(HumbBar, {
          className: humbClass,
          key: humbClass
        });
      });
    };

    return _this;
  }

  _createClass(NavbarToggler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          rest = _objectWithoutProperties(_this$props, ["onClick"]);

      return React.createElement(NavbarTogglerStyled, Object.assign({
        onClick: onClick
      }, rest), this.buildHumbBars());
    }
  }]);

  return NavbarToggler;
}(PureComponent);

export default NavbarToggler;