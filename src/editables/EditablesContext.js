import React from "react";

export const theme = {
  primaryColor: "#739ffd", // orange
  lightColor: "#E5E5E5", // light grey
  fontFamily: "sans-serif",
  fontSize: 14,
  editContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    position: "relative",
    cursor: "pointer",
    margin: '1px',
    marginBottom: '12px'
  },
  editContainerHighlight: {
    backgroundColor: "rgba(255,255,255,0.9)",
    zIndex: "2500",
    outline: "1px solid #739ffd",
    position:"relative"
  },
  actions: {
    position: "absolute",
    right: "6px",
    bottom: "-12px",
    display: "flex",
    alignItems: "center",
    zIndex: "99",
    backgroundColor: "#739ffd",
    borderRadius: "30px",
    padding: '2px',
    width: "fit-content",
    height: "fit-content",
  },
  button: {
    margin: '1px',
    border: "1px solid #000",
    color: "black",
    backgroundColor: "#fff",
    height: "18px",
    width: "18px",
    borderRadius: "30px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#eee"
    }
  },
  icon: {
    fontSize: "14px"
  }
};

export const EditablesContext = React.createContext({ showEditingControls: true, theme: theme });
