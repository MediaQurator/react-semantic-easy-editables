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
    border: "1px solid " + _EditablesContext.theme.lightColor
  }
};

var PlainTextEditor = function PlainTextEditor(_ref) {
  var content = _ref.content,
      onContentChange = _ref.onContentChange,
      classes = _ref.classes,
      EditorProps = _ref.EditorProps,
      placeholder = _ref.placeholder;

  var handleChange = function handleChange(event) {
    event.preventDefault();
    event.stopPropagation();
    var text = event.currentTarget.value;

    if (EditorProps && EditorProps.uppercase && text) {
      text = text.toUpperCase();
    }

    onContentChange(_extends({}, content, {
      text: text
    }));
  };

  var text = Boolean(content) ? content.text : '';

  var _style = _extends({}, styles.input);

  if (EditorProps && EditorProps.uppercase) {
    _style.textTransform = "uppercase";
  }

  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "text",
    style: _style,
    value: text,
    onChange: handleChange,
    className: classes,
    placeholder: placeholder,
    autoFocus: true
  }, EditorProps));
};

PlainTextEditor.propTypes = {
  content: _propTypes["default"].shape({
    text: _propTypes["default"].string
  }).isRequired,
  onContentChange: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
};
PlainTextEditor.defaultProps = {
  content: {
    text: ""
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  }
};
var _default = PlainTextEditor;
exports["default"] = _default;