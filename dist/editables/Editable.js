"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EditorWrapper = _interopRequireDefault(require("../editingTools/EditorWrapper"));

var _EditablesContext = require("./EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Editable = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Editable, _React$Component);

  var _super = _createSuper(Editable);

  function Editable(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.toggleEditing = function (e) {
      var isEditing = !_this.state.isEditing;
      e.stopPropagation();

      if (isEditing) {
        var canEdit = _this.canEdit(e.target);

        if (!canEdit) {
          return;
        }
      }

      _this.setState({
        isEditing: isEditing
      });
    };

    _this.canEdit = function (target) {
      if (target && target.id && _this.props.editableElementIds && _this.props.editableElementIds.length > 0) {
        console.log(_this.props.editableElementIds, target.id);
        return _this.props.editableElementIds.includes(target.id);
      }

      return true;
    };

    _this.startEditing = function (e) {
      var canEdit = _this.canEdit(e.target);

      e.stopPropagation();

      if (canEdit) {
        _this.setState({
          isEditing: true
        });
      }
    };

    _this.stopEditing = function (e) {
      e.stopPropagation();

      _this.setState({
        isEditing: false
      });
    };

    _this.onSave = function (e) {
      _this.stopEditing(e);

      _this.props.handleSave(_this.state.editingContent);
    };

    _this.onDelete = function () {
      if (_this.props.onDelete) {
        return function (e) {
          _this.stopEditing(e);

          _this.props.onDelete();
        };
      }

      return null;
    };

    _this.onContentChange = function (updatedContent) {
      _this.setState({
        editingContent: updatedContent
      });
    };

    _this.state = {
      isEditing: false,
      editingContent: _this.props.content
    };
    return _this;
  }

  var _proto = Editable.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.setState({
        editingContent: this.props.content
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Editor = _this$props.Editor,
        fullWidth = _this$props.fullWidth,
        disableDelete = _this$props.disableDelete,
        classes = _this$props.classes,
        children = _this$props.children,
        EditorProps = _this$props.EditorProps,
        WrapperProps = _this$props.WrapperProps,
        content = _this$props.content,
        isDoubleClick = _this$props.isDoubleClick,
        isContentClickTarget = _this$props.isContentClickTarget,
        showActions = _this$props.showActions,
        rest = _objectWithoutPropertiesLoose(_this$props, ["Editor", "fullWidth", "disableDelete", "classes", "children", "EditorProps", "WrapperProps", "content", "isDoubleClick", "isContentClickTarget", "showActions"]);

    var editingContent = this.state.editingContent;

    if (this.context.showEditingControls) {
      return /*#__PURE__*/_react["default"].createElement(_EditorWrapper["default"], {
        isDoubleClick: isDoubleClick,
        theme: this.context.theme,
        isEditing: this.state.isEditing,
        toggleEditing: this.toggleEditing,
        startEditing: this.startEditing,
        stopEditing: this.stopEditing,
        handleDelete: this.onDelete(),
        onSave: this.onSave,
        fullWidth: fullWidth,
        showActions: showActions,
        disableDelete: disableDelete,
        isContentClickTarget: isContentClickTarget,
        WrapperProps: WrapperProps
      }, this.state.isEditing && /*#__PURE__*/_react["default"].createElement(Editor, _extends({
        content: editingContent,
        onContentChange: this.onContentChange,
        classes: classes,
        EditorProps: EditorProps
      }, rest)), (!this.state.isEditing || !!this.props.showChildren) && children);
    } else {
      return children;
    }
  };

  return Editable;
}(_react["default"].Component);

Editable.contextType = _EditablesContext.EditablesContext;
Editable.propTypes = {
  Editor: _propTypes["default"].func.isRequired,
  EditorProps: _propTypes["default"].object,
  WrapperProps: _propTypes["default"].object,
  handleSave: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired,
  onDelete: _propTypes["default"].func,
  content: _propTypes["default"].object,
  fullWidth: _propTypes["default"].bool,
  disableDelete: _propTypes["default"].bool,
  classes: _propTypes["default"].string,
  isContentClickTarget: _propTypes["default"].bool
};
var _default = Editable;
exports["default"] = _default;