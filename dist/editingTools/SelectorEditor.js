"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SelectorEditor(_ref) {
  var EditorProps = _ref.EditorProps,
      content = _ref.content,
      handleSave = _ref.handleSave,
      handleCancel = _ref.handleCancel,
      SelectorElement = _ref.SelectorElement,
      onContentChange = _ref.onContentChange;
  var onToggleEdit = EditorProps.onToggleEdit;
  (0, _react.useEffect)(function () {
    onToggleEdit(true); // Specify how to clean up after this effect:

    return function cleanup() {
      onToggleEdit(false, content);
    };
  }, []);

  function onSelect(obj, e) {
    onContentChange(obj);
    handleSave(obj, e);
  }

  if (SelectorElement) {
    return /*#__PURE__*/_react["default"].createElement(SelectorElement, _extends({}, EditorProps, {
      onCancel: handleCancel,
      onSelect: onSelect
    }));
  }

  return null;
}

var _default = SelectorEditor;
exports["default"] = _default;