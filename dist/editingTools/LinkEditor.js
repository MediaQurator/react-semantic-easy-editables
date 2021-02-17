"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  label: {
    color: 'inherit'
  },
  textField: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff"
  },
  input: {
    borderRadius: '0'
  }
};

var LinkEditor = function LinkEditor(_ref) {
  var content = _ref.content,
      onContentChange = _ref.onContentChange,
      classes = _ref.classes,
      EditorProps = _ref.EditorProps,
      editAnchorText = _ref.editAnchorText;

  var handleChange = function handleChange(id) {
    return function (event) {
      var _extends2;

      event.preventDefault();
      event.stopPropagation();
      onContentChange(_extends({}, content, (_extends2 = {}, _extends2[id] = event.currentTarget.value, _extends2)));
    };
  };

  var anchor = content.anchor,
      link = content.link;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    container: true,
    spacing: 1,
    className: classes,
    style: styles.container
  }, editAnchorText && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, _extends({
    id: "link-text",
    label: "Link text",
    value: anchor,
    onChange: handleChange('anchor'),
    autoFocus: true,
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    },
    style: styles.textField
  }, EditorProps.anchor))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    item: true,
    xs: 12,
    md: editAnchorText ? 6 : 12
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, _extends({
    id: "link-url",
    label: "Link URL",
    variant: "outlined",
    value: link,
    onChange: handleChange('link'),
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    },
    style: styles.textField
  }, EditorProps.link))));
};

LinkEditor.propTypes = {
  content: _propTypes["default"].shape({
    anchor: _propTypes["default"].string,
    link: _propTypes["default"].string
  }).isRequired,
  onContentChange: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].shape({
    anchor: _propTypes["default"].object,
    link: _propTypes["default"].object
  }),
  editAnchorText: _propTypes["default"].bool
};
LinkEditor.defaultProps = {
  content: {
    anchor: '',
    link: ''
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  },
  editAnchorText: true,
  classes: "",
  EditorProps: {
    anchor: {},
    link: {}
  }
};
var _default = LinkEditor;
exports["default"] = _default;