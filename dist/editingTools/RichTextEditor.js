"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextEditor = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('react-rte'));
  });
});

var TOOLBAR_CONFIG = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [{
    label: 'Bold',
    style: 'BOLD',
    className: 'custom-css-class'
  }, {
    label: 'Italic',
    style: 'ITALIC'
  }, {
    label: 'Underline',
    style: 'UNDERLINE'
  }],
  BLOCK_TYPE_DROPDOWN: [{
    label: 'Normal',
    style: 'unstyled'
  }, {
    label: 'Heading Large',
    style: 'header-one'
  }, {
    label: 'Heading Medium',
    style: 'header-two'
  }, {
    label: 'Heading Small',
    style: 'header-three'
  }],
  BLOCK_TYPE_BUTTONS: [{
    label: 'UL',
    style: 'unordered-list-item'
  }, {
    label: 'OL',
    style: 'ordered-list-item'
  }]
};
var styles = {
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff"
  }
};

var RichTextEditor = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(RichTextEditor, _React$Component);

  var _super = _createSuper(RichTextEditor);

  function RichTextEditor(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.initializeEditorState = function () {
      Promise.resolve().then(function () {
        return _interopRequireWildcard(require('react-rte'));
      }).then(function (module) {
        var text = Boolean(_this.props.content) ? _this.props.content.text : '';
        var editorValue = module.createValueFromString(text, 'html');

        _this.setState({
          editorValue: editorValue
        });
      });
    };

    _this.onChange = function (editorValue) {
      var text = editorValue.toString('html');

      _this.setState({
        editorValue: editorValue
      });

      _this.props.onContentChange(_extends({}, _this.props.content, {
        text: text
      }));
    };

    _this.handleBlur = function (event) {
      event.preventDefault();
      event.persist();

      var text = _this.state.editorValue.toString('html');

      _this.props.onContentChange(_extends({}, _this.props.content, {
        text: text
      }), function () {
        _this.props.onSaveMandatory(event);
      });
    };

    _this.state = {
      editorValue: null
    };
    return _this;
  }

  var _proto = RichTextEditor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.initializeEditorState();
  };

  _proto.render = function render() {
    var editorValue = this.state.editorValue;
    var _this$props = this.props,
        classes = _this$props.classes,
        EditorProps = _this$props.EditorProps,
        placeholder = _this$props.placeholder;

    if (editorValue) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.input,
        className: classes
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "....")
      }, /*#__PURE__*/_react["default"].createElement(TextEditor, _extends({
        placeholder: placeholder,
        value: editorValue,
        onChange: this.onChange,
        onBlur: this.handleBlur
      }, EditorProps, {
        toolbarConfig: TOOLBAR_CONFIG
      }))));
    }

    return /*#__PURE__*/_react["default"].createElement("div", null);
  };

  return RichTextEditor;
}(_react["default"].Component);

;
RichTextEditor.propTypes = {
  content: _propTypes["default"].object.isRequired,
  onContentChange: _propTypes["default"].func.isRequired,
  EditorProps: _propTypes["default"].object,
  classes: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
};
RichTextEditor.defaultProps = {
  content: {
    text: ""
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  },
  EditorProps: {},
  classes: "",
  placeholder: ""
};
var _default = RichTextEditor;
exports["default"] = _default;