import React from "react";
import PropTypes from "prop-types";

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
  }
};

class PlainTextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
  }

  handleEditorChange = event => {
    const newContent = { text: event.currentTarget.value }

    this.setState({
      content: {
        ...this.state.content,
        ...newContent
      }
    }, () => {
      if (this.props.handleEditorChange) {
        this.props.handleEditorChange(this.state.content);
      }
    });
  }

  render() {
    const text = Boolean(this.state.content) ? this.state.content.text : '';
    const { classes, EditorProps, placeholder } = this.props

    return (
      <input
        type="text"
        style={styles.input}
        value={text}
        onChange={this.handleEditorChange}
        className={classes}
        placeholder={placeholder}
        {...EditorProps}
      />
    );
  }
}

PlainTextEditor.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
}

export default PlainTextEditor;
