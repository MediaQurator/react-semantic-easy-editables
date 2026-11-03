"use strict";

exports.__esModule = true;
exports.EditablesContext = exports.theme = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = {
  primaryColor: "#739ffd",
  primaryHoverColor: "#5a86f0",
  dangerColor: "#d64545",
  lightColor: "#E5E5E5",
  fontFamily: "sans-serif",
  fontSize: 14,
  editContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    position: "relative",
    cursor: "pointer",
    margin: "1px",
    marginBottom: "12px"
  },
  editContainerHighlight: {
    backgroundColor: "rgba(255,255,255,0.9)",
    zIndex: "2500",
    outline: "1px solid #739ffd",
    position: "relative"
  },
  actions: {
    position: "absolute",
    right: "12px",
    top: 0,
    transform: "translateY(-50%)",
    zIndex: "99",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    padding: "3px",
    backgroundColor: "#fff",
    border: "1px solid #d4dbe6",
    borderRadius: "999px",
    boxShadow: "0 2px 6px rgba(20, 30, 60, 0.12)",
    width: "fit-content",
    height: "fit-content"
  },
  button: {
    position: "relative",
    width: "26px",
    height: "26px",
    padding: 0,
    margin: 0,
    border: 0,
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "#4a5160",
    outline: "none",
    transition: "background-color 120ms ease, color 120ms ease, transform 80ms ease"
  },
  buttonActive: {
    transform: "scale(0.92)"
  },
  buttonFocus: {
    boxShadow: "0 0 0 2px #fff, 0 0 0 4px #739ffd"
  },
  cancelButtonHover: {
    backgroundColor: "rgba(214, 69, 69, 0.1)",
    color: "#d64545"
  },
  saveButton: {
    backgroundColor: "#739ffd",
    color: "#fff"
  },
  saveButtonHover: {
    backgroundColor: "#5a86f0"
  },
  // X: two crossed bars
  cancelIconBar: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "12px",
    height: "2px",
    borderRadius: "1px",
    backgroundColor: "currentColor"
  },
  // check: two borders of a rotated box
  saveIcon: {
    position: "absolute",
    top: "45%",
    left: "50%",
    width: "6px",
    height: "11px",
    border: "solid currentColor",
    borderWidth: "0 2px 2px 0",
    transform: "translate(-50%, -50%) rotate(45deg)"
  }
};
exports.theme = theme;

var EditablesContext = _react["default"].createContext({
  showEditingControls: true,
  theme: theme
});

exports.EditablesContext = EditablesContext;