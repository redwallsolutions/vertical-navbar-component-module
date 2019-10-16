import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\t\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\t\tp {\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\tmax-width: 80%;\n\t\t\twhite-space: nowrap;\n\t\t\tfont-size: 11px;\n\t\t}\n\tcolor: ", ";\n\tborder-", ": 2px solid transparent;\n\tcursor: pointer;\n\t", "\n\t&:hover {\n\t\t", "\n\t}\n\t&:active {\n\t\ttransform: scale(1.06);\n\t}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  z-index: 0;\n  width: 100%;\n  height: calc(100% - ", ");\n  position: absolute;\n\tbackground: linear-gradient(135deg, #f7f7f7, #eaeaea);\n  ", "\n  padding-left: ", "\n  overflow: auto;\n  overflow-x: hidden;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\theight: 120px;\n\tmax-height: 120px;\n\tmin-height: 120px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\timg {\n\t\twidth: 70%;\n\t}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 80px;\n  height: ", ";\n\tbox-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1), 0 0 17px 0 rgba(0, 0, 0, 0.08),\n\t\t0 0 30px 0 rgba(0, 0, 0, 0.04);\n  ", "\n  background: ", ";\n  ", "\n  ", "\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100%;\n  background: transparent;\n  overflow: auto;\n  overflow-", ": hidden;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    width: 0px;\n  }\n  position: fixed; \n  z-index: 1;\n  ", "\n  ", "\n  \n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100vw;\n\tmax-width: 100vw;\n\theight: 100vh;\n\tmax-height: 100vh;\n\tposition: relative;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  .vertical-navbar-component-module {\n    font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif !important;\n    box-sizing: border-box !important;\n    padding: 0;\n    margin: 0;\n\t* {\n\t\ttransition: .3s;\n\t}\n  }\n\n  .vertical-navbar-tooltip {\n\t  font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif !important;\n\t  font-size: 14px;\n\t  letter-spacing: 1px;\n\t  padding: 10px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\twidth: 80px;\n\tmax-width: 80px;\n\tmin-width: 80px;\n\theight: 80px;\n\tmax-height: 80px;\n\tmin-height: 80px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tmin-width: 100%;\n\tmax-width: 100%;\n\theight: 80px;\n\tmin-height: 80px;\n\tmax-height: 80px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tborder-", "-color: ", ";\n\tbackground: ", ";\n\ttransform: ", ";\n  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.03), 0 0 20px 0 rgba(0, 0, 0, 0.05), 0 0 15px 0 ", " inset;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbackground: linear-gradient(\n\t\t135deg,\n\t\t", ",\n\t\t", "\n\t);\n\tcolor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle, css } from 'styled-components';
import Color from 'color';
import Theming from 'theming-component-module';
var theming = Theming.createThemeWithAppearance();
var defaultProps = {
  appearance: 'default',
  theme: {
    mode: 'light'
  }
};
var darkModeDefaults = css(_templateObject(), function (props) {
  return theming(props).contrast;
}, function (props) {
  return Color(theming(props).contrast(props)).darken(0.5).toString();
}, function (props) {
  return theming(props).color;
});
var isItemActive = css(_templateObject2(), function (props) {
  return props.isSmall ? 'top' : 'right';
}, function (props) {
  return theming(props).color;
}, function (props) {
  return Color(theming(props).contrast(props)).darken(0.03).toString();
}, function (props) {
  return 'scale(1.08)';
}, function (props) {
  return Color(theming(props).contrast(props)).darken(0.1).toString();
});
var isSmall = css(_templateObject3());
var defaultSizes = css(_templateObject4());
export var Reset = createGlobalStyle(_templateObject5());
export var VerticalNavbarContainer = styled.div(_templateObject6());
export var VerticalNavbarScrollWrapper = styled.div(_templateObject7(), function (props) {
  return props.isSmall ? 'y' : 'x';
}, function (props) {
  return props.isSmall && isSmall;
}, function (props) {
  return props.isSmall && 'bottom:0; height: 100px; min-height: 100px; max-height: 100px; display: flex; align-items: flex-end;';
});
export var VerticalNavbarStyled = styled.nav(_templateObject8(), function (props) {
  return props.amountOfItems > 8 ? 'auto' : '100%';
}, function (props) {
  return props.theme.mode === 'dark' && darkModeDefaults;
}, function (props) {
  return props.theme.mode === 'light' ? 'white' : Color(theming(props).contrast(props)).lighten(0.15).toString();
}, function (props) {
  return props.isSmall && isSmall;
}, function (props) {
  return props.isSmall && 'display: flex; width: auto; min-width: auto; max-width: max-content;';
});
export var VerticalNavbarHeaderStyled = styled.header(_templateObject9(), defaultSizes);
export var ContentContainer = styled.div(_templateObject10(), function (props) {
  return props.isSmall ? '80px' : '0px';
}, function (props) {
  return props.theme.mode === 'dark' && darkModeDefaults;
}, function (props) {
  return !props.isSmall ? '98px' : '0px';
});
export var VerticalNavbarItemStyled = styled.div(_templateObject11(), defaultSizes, function (props) {
  return props.isSmall && (props.amountOfItems > 3 ? 'width: 25vw; max-width: 25vw; min-width: 25vw;' : "width: ".concat(100 / props.amountOfItems, "vw;max-width: ").concat(100 / props.amountOfItems, "vw;min-width: ").concat(100 / props.amountOfItems, "vw;"));
}, function (props) {
  return theming(props).color;
}, function (props) {
  return props.isSmall ? 'top' : 'right';
}, function (props) {
  return props.isActive && isItemActive;
}, isItemActive);
Reset.defaultProps = VerticalNavbarContainer.defaultProps = VerticalNavbarStyled.defaultProps = ContentContainer.defaultProps = VerticalNavbarItemStyled.defaultProps = VerticalNavbarHeaderStyled.defaultProps = defaultProps;