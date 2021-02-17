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
  },
  container: {
    padding: '0.5rem'
  },
  radioFormLabel: {
    paddingBottom: '4px'
  },
  radioButton: {
    padding: '4px',
    paddingLeft: '9px'
  }
};

var TimelineEditor = function TimelineEditor(_ref) {
  var content = _ref.content,
      onContentChange = _ref.onContentChange;

  var handleChange = function handleChange(id) {
    return function (event) {
      var _extends2;

      var value = event.currentTarget.value;
      onContentChange(_extends({}, content, (_extends2 = {}, _extends2[id] = value, _extends2)));
    };
  };

  var spreadsheetId = Boolean(content) ? content.spreadsheetId : '';
  var apiKey = Boolean(content) ? content.apiKey : '';
  var timelines = Boolean(content) ? content.timelines : '';
  var alignment = Boolean(content) ? content.alignment : 'left';
  var interval = Boolean(content) ? content.interval : '';
  var startYear = Boolean(content) ? content.startYear : '';
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    container: true,
    spacing: 1,
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
    id: "spreadsheetId",
    label: "Google spreadsheet ID",
    style: styles.textField,
    value: spreadsheetId,
    onChange: handleChange(spreadsheetId),
    helperText: "Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)",
    required: true,
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
    id: "timelines",
    label: "Sheet titles",
    style: styles.textField,
    value: timelines,
    onChange: handleChange('timelines'),
    helperText: "Enter the titles of the spreadsheet tabs, separated by commas.",
    placeholder: "Sheet1, Sheet2, Sheet3",
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
    id: "interval",
    type: "number",
    label: "Time marker interval (optional)",
    style: styles.textField,
    value: interval,
    onChange: handleChange('interval'),
    helperText: "Enter the interval in years. Leave it blank to omit the time markers.",
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
    id: "startYear",
    label: "Start year (optional)",
    type: "number",
    style: styles.textField,
    value: startYear,
    onChange: handleChange('startYear'),
    helperText: "Enter the start year for the time markers.",
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
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: styles.radioFormLabel
  }, "Alignment")));
};

TimelineEditor.propTypes = {
  content: _propTypes["default"].object.isRequired,
  onContentChange: _propTypes["default"].func.isRequired
};
TimelineEditor.defaultProps = {
  content: {
    spreadsheetId: '1vieT0gVrDOHAvAUW8uUWQZj2heeJr8Xg6bZbvKkFFbQ',
    timelines: "Toy Story Movies, Jurassic Park Movies, Spiderman Movies",
    apiKey: ""
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  }
};
var _default = TimelineEditor;
exports["default"] = _default;