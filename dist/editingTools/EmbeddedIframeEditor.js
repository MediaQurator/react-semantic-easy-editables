"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  header: {
    display: "flex"
  },
  container: {
    padding: '0.5rem'
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

var EmbeddedIframeEditor = function EmbeddedIframeEditor(_ref) {
  var content = _ref.content,
      onContentChange = _ref.onContentChange;

  var handleChange = function handleChange(id) {
    return function (event) {
      var _extends2;

      event.preventDefault();
      event.stopPropagation();
      onContentChange(_extends({}, content, (_extends2 = {}, _extends2[id] = event.currentTarget.value, _extends2)));
    };
  };

  var src = Boolean(content) ? content.src : '';
  var title = Boolean(content) ? content.title : '';
  var height = Boolean(content) ? content.height : '';
  var width = Boolean(content) ? content.width : '';
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    container: true,
    spacing: 1,
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
    id: "iframe-src",
    label: "Iframe source URL",
    style: styles.textField,
    value: src,
    onChange: handleChange('src'),
    helperText: "In the embed code, look for the 'src' attribute and copy that URL.",
    required: true,
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    item: true,
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
    id: "iframe-title",
    label: "Title",
    style: styles.textField,
    value: title,
    onChange: handleChange('title'),
    required: true,
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
    id: "iframe-height",
    label: "Height (optional)",
    style: styles.textField,
    value: height,
    onChange: handleChange('height'),
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
    id: "iframe-width",
    label: "Width (optional)",
    style: styles.textField,
    value: width,
    onChange: handleChange('width'),
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })));
};

EmbeddedIframeEditor.propTypes = {
  content: _propTypes["default"].shape({
    src: _propTypes["default"].string,
    title: _propTypes["default"].string,
    height: _propTypes["default"].string,
    width: _propTypes["default"].string
  }).isRequired,
  onContentChange: _propTypes["default"].func.isRequired
};
EmbeddedIframeEditor.defaultProps = {
  content: {
    src: "",
    title: "",
    height: "300px",
    width: "560px"
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  }
};
var _default = EmbeddedIframeEditor;
exports["default"] = _default;