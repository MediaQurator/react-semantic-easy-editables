"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EditablesContext = require("./EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var EditableCollection = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(EditableCollection, _React$Component);

  var _super = _createSuper(EditableCollection);

  function EditableCollection() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onSaveItem = function (itemId) {
      return function (item) {
        var _extends2;

        var newCollection = _extends({}, _this.props.content, (_extends2 = {}, _extends2[itemId] = {
          content: _extends({}, _this.props.content[itemId].content, {}, item)
        }, _extends2));

        _this.props.onSave(newCollection);
      };
    };

    _this.onDeleteItem = function (itemId) {
      return function () {
        var newCollection = _extends({}, _this.props.content);

        delete newCollection[itemId];

        _this.props.onSave(newCollection);
      };
    };

    _this.onAddItem = function () {
      var _extends3;

      var newItemId = _this.props.name + "-" + Date.now();

      var newCollection = _extends({}, _this.props.content, (_extends3 = {}, _extends3[newItemId] = _this.props.defaultContent, _extends3));

      _this.props.onSave(newCollection);
    };

    return _this;
  }

  var _proto = EditableCollection.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        content = _this$props.content,
        Component = _this$props.Component,
        classes = _this$props.classes,
        reverseOrder = _this$props.reverseOrder,
        rest = _objectWithoutPropertiesLoose(_this$props, ["content", "Component", "classes", "reverseOrder"]);

    var itemsKeys = Object.keys(content);
    var orderedItems = itemsKeys.sort();

    if (reverseOrder) {
      orderedItems = orderedItems.reverse();
    }

    if (!this.context.showEditingControls && itemsKeys.length < 1) {
      return /*#__PURE__*/_react["default"].createElement("p", null, "Coming soon!");
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "collection " + classes
    }, orderedItems.map(function (key, index) {
      var componentContent = content[key].content;
      return /*#__PURE__*/_react["default"].createElement(Component, {
        key: "collection-item-" + key,
        index: index,
        content: componentContent,
        onSave: _this2.onSaveItem(key),
        onDelete: _this2.props.onDeleteItem ? _this2.props.onDeleteItem(key) : _this2.onDeleteItem(key)
      });
    }), this.context.showEditingControls && /*#__PURE__*/_react["default"].createElement("div", {
      className: "row mt-4"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: this.props.onAddItem || this.onAddItem
    }, "AddIcon"))));
  };

  return EditableCollection;
}(_react["default"].Component);

EditableCollection.contextType = _EditablesContext.EditablesContext;
EditableCollection.propTypes = {
  items: _propTypes["default"].object,
  isEditingPage: _propTypes["default"].bool,
  options: _propTypes["default"].object,
  onSave: _propTypes["default"].func.isRequired,
  onAddItem: _propTypes["default"].func,
  onDeleteItem: _propTypes["default"].func,
  defaultContent: _propTypes["default"].object,
  name: _propTypes["default"].string,
  reverseOrder: _propTypes["default"].bool
};
EditableCollection.defaultProps = {
  items: {},
  isEditingPage: false,
  options: {},
  onSave: function onSave(newCollection) {
    console.log("Implement save function!", newCollection);
  },
  defaultContent: {},
  name: 'item',
  reverseOrder: true
};
var _default = EditableCollection;
exports["default"] = _default;