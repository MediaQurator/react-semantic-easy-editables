import React from "react";
import PropTypes from 'prop-types';
import EditorWrapper from "../editingTools/EditorWrapper";
import { EditablesContext } from "./EditablesContext";



class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editingContent: this.props.content
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.setState({ editingContent: this.props.content })
    }
  }

  toggleEditing = (e) => {
    e.stopPropagation();
    this.setState({ isEditing: !this.state.isEditing });
  };

  canEdit = (target) => {
    if(target && target.id
      && this.props.editableElementIds
      && this.props.editableElementIds.length > 0) {
      return this.props.editableElementIds.includes(target.id)
    }
    return true;
  }
  startEditing = e => {
    const canEdit = this.canEdit(e.target)
    e.stopPropagation();
    if(canEdit) {
      this.setState({ isEditing: true });
    }

  }

  stopEditing = e => {
    e.stopPropagation();
    this.setState({ isEditing: false });
  }

  onSave = e => {
    this.stopEditing(e);
    this.props.handleSave(this.state.editingContent);
  };

  onDelete = () => {
    if (this.props.onDelete) {
      return (e) => {
        this.stopEditing(e)
        this.props.onDelete()
      }
    }

    return null
  }

  onContentChange = updatedContent => {
    this.setState({ editingContent: updatedContent })
  }

  render() {
    const { Editor, fullWidth, disableDelete, classes, children,EditorProps, WrapperProps, content, isDoubleClick, isContentClickTarget,showActions, ...rest } = this.props;
    const { editingContent } = this.state;

    if (this.context.showEditingControls) {
      return (
          <EditorWrapper
            isDoubleClick={isDoubleClick}
            theme={this.context.theme}
            isEditing={this.state.isEditing}
            toggleEditing={this.toggleEditing}
            startEditing={this.startEditing}
            stopEditing={this.stopEditing}
            handleDelete={this.onDelete()}
            onSave={this.onSave}
            fullWidth={fullWidth}
            showActions={showActions}
            disableDelete={disableDelete}
            isContentClickTarget={isContentClickTarget}
            WrapperProps={WrapperProps}
          >
            {this.state.isEditing && (
              <Editor
                content={editingContent}
                onContentChange={this.onContentChange}
                classes={classes}
                EditorProps={EditorProps}
                {...rest}
              />
            )}
            {(!this.state.isEditing || !!this.props.showChildren) && children}
          </EditorWrapper>
      );
    } else {
      return children;
    }
  }
}


Editable.contextType = EditablesContext;

Editable.propTypes = {
  Editor: PropTypes.func.isRequired,
  EditorProps: PropTypes.object,
  WrapperProps: PropTypes.object,
  handleSave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func,
  content: PropTypes.object,
  fullWidth: PropTypes.bool,
  disableDelete: PropTypes.bool,
  classes: PropTypes.string,
  isContentClickTarget: PropTypes.bool,
};

export default Editable;
