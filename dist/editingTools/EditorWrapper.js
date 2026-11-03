"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ActionButton = function ActionButton(_ref) {
  var styles = _ref.styles,
      variant = _ref.variant,
      label = _ref.label,
      className = _ref.className,
      onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type,
      children = _ref.children;

  var _useState = (0, _react.useState)(false),
      hover = _useState[0],
      setHover = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      active = _useState3[0],
      setActive = _useState3[1];

  var isSave = variant === "save";

  var style = _extends({}, styles.button, {}, isSave ? styles.saveButton : null, {}, hover ? isSave ? styles.saveButtonHover : styles.cancelButtonHover : null, {}, focus ? styles.buttonFocus : null, {}, active ? styles.buttonActive : null);

  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type,
    className: className,
    "aria-label": label,
    title: label,
    style: style,
    onClick: onClick,
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      setHover(false);
      setActive(false);
    },
    onMouseDown: function onMouseDown() {
      return setActive(true);
    },
    onMouseUp: function onMouseUp() {
      return setActive(false);
    },
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    }
  }, children);
};

var CancelIcon = function CancelIcon(_ref2) {
  var styles = _ref2.styles;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true",
    style: _extends({}, styles.cancelIconBar, {
      transform: "translate(-50%, -50%) rotate(45deg)"
    })
  }), /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true",
    style: _extends({}, styles.cancelIconBar, {
      transform: "translate(-50%, -50%) rotate(-45deg)"
    })
  }));
};

var SaveIcon = function SaveIcon(_ref3) {
  var styles = _ref3.styles;
  return /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true",
    style: styles.saveIcon
  });
};

var EditorWrapper = function EditorWrapper(_ref4) {
  var theme = _ref4.theme,
      startEditing = _ref4.startEditing,
      stopEditing = _ref4.stopEditing,
      isEditing = _ref4.isEditing,
      fullWidth = _ref4.fullWidth,
      onSave = _ref4.onSave,
      handleDelete = _ref4.handleDelete,
      disableDelete = _ref4.disableDelete,
      isDoubleClick = _ref4.isDoubleClick,
      isContentClickTarget = _ref4.isContentClickTarget,
      showActions = _ref4.showActions,
      children = _ref4.children;
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
  }, handleDelete && !disableDelete && /*#__PURE__*/_react["default"].createElement(ActionButton, {
    styles: styles,
    variant: "cancel",
    label: "Cancel",
    className: "delete-icon",
    onClick: handleDelete
  }, /*#__PURE__*/_react["default"].createElement(CancelIcon, {
    styles: styles
  })), /*#__PURE__*/_react["default"].createElement(ActionButton, {
    styles: styles,
    variant: "save",
    label: "Save",
    className: "save-icon",
    type: "submit",
    onClick: onSave
  }, /*#__PURE__*/_react["default"].createElement(SaveIcon, {
    styles: styles
  }))));
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
  isContentClickTarget: _propTypes["default"].bool,
  showActions: _propTypes["default"].bool
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