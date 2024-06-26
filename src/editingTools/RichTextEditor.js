import React, {Suspense} from 'react'
import PropTypes from "prop-types";

const TextEditor = React.lazy(() => import('react-rte'))
const TOOLBAR_CONFIG = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [
    {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'}
  ],
  BLOCK_TYPE_DROPDOWN: [
    {label: 'Normal', style: 'unstyled'},
    {label: 'Heading Large', style: 'header-one'},
    {label: 'Heading Medium', style: 'header-two'},
    {label: 'Heading Small', style: 'header-three'}
  ],
  BLOCK_TYPE_BUTTONS: [
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'}
  ]
}

const styles = {
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
  }
};

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editorValue: null,
      initialEditorValue: null
     }
  }

  componentDidMount() {
    this.initializeEditorState();
  }

  initializeEditorState = () => {
    import('react-rte').then(module => {
      const text = Boolean(this.props.content) ? this.props.content.text : '';
      const editorValue = module.createValueFromString(text, 'html');
      this.setState({ editorValue, initialEditorValue: editorValue });
    })

  }

  onChange = (editorValue) => {
    const text = editorValue.toString('html')

    this.setState({ editorValue })
    this.props.onContentChange({
      ...this.props.content,
      text: text
    })
  }

   handleBlur = (event) => {
    if (event.relatedTarget && event.relatedTarget.tagName === "BUTTON" && event.relatedTarget.textContent === "x") {
      event.preventDefault()
      event.persist();
      const text = this.state.initialEditorValue.toString('html');
      this.props.onContentChange({
        ...this.props.content,
        text: text
      }, () => {
        this.props.handleSave({
          ...this.props.content,
          text: text
        });
      })
      this.props.onDelete();
    }
    else if (!event.relatedTarget || event.relatedTarget.tagName !== "SELECT") {
      event.preventDefault()
      event.persist();
      const text = this.state.editorValue.toString('html')
      this.props.onContentChange({
        ...this.props.content,
        text: text
      }, () => {
        this.props.onSaveMandatory(event);
      })
    }
    
  }
  render() {
    const { editorValue } = this.state;
    const { classes, EditorProps, placeholder } = this.props;

    if (editorValue) {
      return (
        <div style={styles.input} className={classes}>
          <Suspense fallback={<div>....</div>}>
            <TextEditor
              placeholder={placeholder}
              value={editorValue}
              onChange={this.onChange}
              onBlur={this.handleBlur}
              {...EditorProps}
              toolbarConfig={TOOLBAR_CONFIG}
            />
          </Suspense>

        </div>
      )
    }

    return (<div />)
  }
};

RichTextEditor.propTypes = {
  content: PropTypes.object.isRequired,
  onContentChange: PropTypes.func.isRequired,
  EditorProps: PropTypes.object,
  classes: PropTypes.string,
  placeholder: PropTypes.string
}

RichTextEditor.defaultProps = {
  content: { text: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
  EditorProps: {},
  classes: "",
  placeholder: ""
}


export default RichTextEditor;
