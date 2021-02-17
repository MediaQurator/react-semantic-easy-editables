"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactImageLightbox = _interopRequireDefault(require("react-image-lightbox"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _ImageUploadEditor = _interopRequireDefault(require("../editingTools/ImageUploadEditor"));

require("react-image-lightbox/style.css");

require("../assets/css/lightbox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var defaultStyles = {
  imageContainer: {
    width: '100%',
    position: 'relative'
  },
  image: {
    height: 'auto',
    width: '100%'
  }
};

var EditableLightboxImageUpload = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(EditableLightboxImageUpload, _React$Component);

  var _super = _createSuper(EditableLightboxImageUpload);

  function EditableLightboxImageUpload(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleSave = function (content) {
      _this.props.onSave(content);
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  var _proto = EditableLightboxImageUpload.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        classes = _this$props.classes,
        styles = _this$props.styles,
        content = _this$props.content,
        showCaption = _this$props.showCaption;
    var isOpen = this.state.isOpen;
    var imageSrc = content.imageSrc,
        caption = content.caption,
        title = content.title;
    return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
      Editor: _ImageUploadEditor["default"],
      handleSave: this.handleSave,
      content: {
        imageSrc: imageSrc,
        caption: caption,
        title: title
      },
      isContentClickTarget: false
    }, this.props), /*#__PURE__*/_react["default"].createElement("div", {
      className: "lightbox-container " + classes,
      style: _extends({}, defaultStyles.imageContainer, {}, styles.container)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      onClick: function onClick() {
        return _this2.setState({
          isOpen: true
        });
      },
      className: "overlay"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Click to view")), /*#__PURE__*/_react["default"].createElement("img", {
      src: imageSrc,
      alt: caption,
      style: _extends({}, defaultStyles.image, {}, styles.image)
    })), showCaption && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("small", null, caption)), isOpen && /*#__PURE__*/_react["default"].createElement(_reactImageLightbox["default"], {
      mainSrc: imageSrc,
      onCloseRequest: function onCloseRequest() {
        return _this2.setState({
          isOpen: false
        });
      },
      imageCaption: caption,
      imageTitle: title
    }));
  };

  return EditableLightboxImageUpload;
}(_react["default"].Component);

exports["default"] = EditableLightboxImageUpload;
;
EditableLightboxImageUpload.propTypes = {
  content: _propTypes["default"].shape({
    imageSrc: _propTypes["default"].string,
    caption: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  uploadImage: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  showCaption: _propTypes["default"].bool,
  maxSize: _propTypes["default"].number,
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
EditableLightboxImageUpload.defaultProps = {
  content: {
    imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png",
    caption: "",
    title: ""
  },
  onSave: function onSave(content) {
    return console.log('Implement a function to save changes!', content);
  },
  showCaption: false,
  maxSize: 1024 * 1024 * 2,
  // 2MB
  styles: {
    container: {},
    image: {}
  },
  EditorProps: {
    image: {},
    caption: {},
    title: {}
  }
};