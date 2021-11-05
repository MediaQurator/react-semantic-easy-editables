import React from "react";
import PropTypes, { func } from 'prop-types'
import { theme } from "../editables/EditablesContext";

const styles = {
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    border: `1px solid ${theme.lightColor}`,
  }
};

const PlainTextEditor = ({ content, onContentChange, classes, EditorProps, placeholder, onSaveMandatory }) => {

  const handleChange = event => {
    event.preventDefault()
    event.stopPropagation();
    let text = event.currentTarget.value;
    if(EditorProps && EditorProps.uppercase && text) {
      text = text.toUpperCase();
    }
    onContentChange({
      ...content,
      text
    })
  }

  const text = Boolean(content) ? content.text : '';

  const _style = {
    ...styles.input,
  };
  if(EditorProps && EditorProps.uppercase) {
    _style.textTransform = "uppercase"

  }
  function handleBlur(event){
    let text = event.currentTarget.value;

    event.preventDefault()
    event.persist();
    if(EditorProps && EditorProps.uppercase && text) {
      text = text.toUpperCase();
    }
    onContentChange({
      ...content,
      text
    }, () => {
      onSaveMandatory(event)
    })
  }
  return (
    <input
      type="text"
      style={_style}
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
      className={classes}
      placeholder={placeholder}
      // autoFocus={true}
      {...EditorProps}
    />
  );
}

PlainTextEditor.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
}

PlainTextEditor.defaultProps = {
  content: { text: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated)
}

export default PlainTextEditor;
