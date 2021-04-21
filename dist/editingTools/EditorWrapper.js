"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var EditorWrapper = function EditorWrapper(_ref) {
  var theme = _ref.theme,
      startEditing = _ref.startEditing,
      stopEditing = _ref.stopEditing,
      isEditing = _ref.isEditing,
      fullWidth = _ref.fullWidth,
      onSave = _ref.onSave,
      handleDelete = _ref.handleDelete,
      disableDelete = _ref.disableDelete,
      isDoubleClick = _ref.isDoubleClick,
      isContentClickTarget = _ref.isContentClickTarget,
      showActions = _ref.showActions,
      children = _ref.children;
  var styles = theme;

  if (fullWidth) {
    styles = _extends({}, styles, {
      editContainer: _extends({}, styles.editContainer, {
        padding: "0",
        marginBottom: "0",
        position: "relative"
      }),
      actions: _extends({}, styles.actions, {
        top: "6px"
      })
    });
  }

  var propsEvents = {
    onClick: isContentClickTarget ? startEditing : null
  };

  if (isDoubleClick) {
    propsEvents = {
      onDoubleClick: isContentClickTarget ? startEditing : null
    };
  }

  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, propsEvents, {
    className: "edit-container",
    style: isEditing && showActions ? _extends({}, styles.editContainer, {}, styles.editContainerHighlight, {
      position: "relative"
    }) : _extends({}, styles.editContainer, {
      position: "relative"
    })
  }), children, isEditing && showActions && /*#__PURE__*/_react["default"].createElement("div", {
    className: "actions",
    style: styles.actions
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "cancel-icon",
    style: styles.button,
    onClick: stopEditing
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: styles.icon
  }, "x")), handleDelete && !disableDelete && /*#__PURE__*/_react["default"].createElement("div", {
    className: "delete-icon",
    style: styles.button,
    onClick: handleDelete
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: styles.icon
  }, "x")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "save-icon",
    type: "submit",
    style: _extends({}, styles.button, {}, styles.saveButton),
    onClick: onSave
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: styles.icon
  }, "\u2713"))));
};

EditorWrapper.propTypes = {
  theme: _propTypes["default"].object,
  startEditing: _propTypes["default"].func,
  stopEditing: _propTypes["default"].func,
  onSave: _propTypes["default"].func,
  handleDelete: _propTypes["default"].func,
  isEditing: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool,
  disableDelete: _propTypes["default"].bool,
  isContentClickTarget: _propTypes["default"].bool
};
EditorWrapper.defaultProps = {
  isEditing: false,
  fullWidth: false,
  disableDelete: false,
  isContentClickTarget: true,
  showActions: true
};
var _default = EditorWrapper;
exports["default"] = _default;