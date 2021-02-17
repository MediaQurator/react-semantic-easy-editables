"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EditablesContext = require("../editables/EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    border: "1px solid " + _EditablesContext.theme.lightColor,
    display: "flex"
  }
};

var TextAreaEditor = function TextAreaEditor(_ref) {
  var content = _ref.content,
      onContentChange = _ref.onContentChange,
      classes = _ref.classes,
      EditorProps = _ref.EditorProps,
      placeholder = _ref.placeholder;

  var handleChange = function handleChange(event) {
    event.preventDefault();
    event.stopPropagation();
    onContentChange(_extends({}, content, {
      text: event.currentTarget.value
    }));
  };

  var text = Boolean(content) ? content.text : '';
  return /*#__PURE__*/_react["default"].createElement("textarea", _extends({
    multiline: "true",
    wrap: "on",
    rows: "4",
    style: styles.input,
    value: text,
    onChange: handleChange,
    className: classes,
    autoFocus: true
  }, EditorProps));
};

TextAreaEditor.propTypes = {
  content: _propTypes["default"].shape({
    text: _propTypes["default"].string
  }).isRequired,
  onContentChange: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].object,
  placeholder: _propTypes["default"].string
};
TextAreaEditor.defaultProps = {
  content: {
    text: ""
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  },
  classes: "",
  placeholder: "",
  EditorProps: {}
};
var _default = TextAreaEditor;
exports["default"] = _default;