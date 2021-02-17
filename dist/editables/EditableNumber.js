"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _NumberEditor = _interopRequireDefault(require("../editingTools/NumberEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditableNumber = function EditableNumber(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var number = props.content.number;
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _NumberEditor["default"],
    handleSave: handleSave,
    content: {
      number: number
    }
  }, props), /*#__PURE__*/_react["default"].createElement("span", {
    className: className
  }, number));
};

EditableNumber.propTypes = {
  content: _propTypes["default"].shape({
    number: _propTypes["default"].number
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].object
};
EditableNumber.defaultProps = {
  content: {
    number: ''
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};
var _default = EditableNumber;
exports["default"] = _default;