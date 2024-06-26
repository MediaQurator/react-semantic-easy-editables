"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var EditableParagraph = function EditableParagraph(props) {
  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var text = props.content.text;
  var placeholder = props.placeholder ? props.placeholder : "";
  var html = text ? text : placeholder;
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _index.RichTextEditor,
    handleSave: handleSave,
    content: {
      text: text
    }
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: props.classes,
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
};

EditableParagraph.propTypes = {
  content: _propTypes["default"].shape({
    text: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].object,
  placeholder: _propTypes["default"].string
};
EditableParagraph.defaultProps = {
  content: {
    text: 'Placeholder'
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};
var _default = EditableParagraph;
exports["default"] = _default;