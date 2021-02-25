"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _SelectorEditor = _interopRequireDefault(require("../editingTools/SelectorEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EditableSelection(_ref) {
  var content = _ref.content,
      children = _ref.children,
      SelectorElement = _ref.SelectorElement,
      EditorProps = _ref.EditorProps,
      onSave = _ref.onSave,
      isDoubleClick = _ref.isDoubleClick,
      onToggleEdit = _ref.onToggleEdit,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["content", "children", "SelectorElement", "EditorProps", "onSave", "isDoubleClick", "onToggleEdit"]);

  var editableRef = (0, _react.useRef)();

  function handleSave(obj, e) {
    onSave(obj);
    var faveEvent = {
      stopPropagation: function stopPropagation() {}
    };
    editableRef.current.stopEditing(faveEvent);
  }

  function handleCancel() {
    var faveEvent = {
      stopPropagation: function stopPropagation() {}
    };
    editableRef.current.stopEditing(faveEvent);
  }

  function handleToggleEdit(editing, content) {
    onToggleEdit(editing, content);
  }

  var _EditorProps = Object.assign({}, EditorProps, {
    onToggleEdit: handleToggleEdit
  });

  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    ref: editableRef,
    Editor: _SelectorEditor["default"],
    SelectorElement: SelectorElement,
    EditorProps: _EditorProps,
    handleSave: handleSave,
    handleCancel: handleCancel,
    content: content,
    isDoubleClick: isDoubleClick,
    showChildren: false,
    showActions: false
  }, otherProps), children);
}

EditableSelection.propTypes = {
  content: _propTypes["default"].shape({
    imageSrc: _propTypes["default"].string,
    caption: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  styles: _propTypes["default"].shape({
    container: _propTypes["default"].object,
    image: _propTypes["default"].object
  }),
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].shape({
    image: _propTypes["default"].object,
    caption: _propTypes["default"].object,
    title: _propTypes["default"].object
  })
};
var _default = EditableSelection;
exports["default"] = _default;