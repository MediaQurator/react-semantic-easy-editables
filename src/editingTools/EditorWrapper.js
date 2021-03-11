import React from "react";
import PropTypes from "prop-types";


const EditorWrapper = ({ theme, startEditing, stopEditing, isEditing, fullWidth, onSave, handleDelete, disableDelete, isDoubleClick,isContentClickTarget, showActions, children }) => {
  let styles = theme

  if (fullWidth) {
    styles = {
      ...styles,
      editContainer: {
        ...styles.editContainer,
        padding: "0",
        marginBottom: "0",
        position:"relative"
      },
      actions: {
        ...styles.actions,
        top: "6px",
      }
    };
  }

  let propsEvents = {
    onClick:isContentClickTarget ? startEditing : null,

  };
  if(isDoubleClick) {
    propsEvents = {
      onDoubleClick : isContentClickTarget ? startEditing : null
    }
  }
  return (
    <div
      {...propsEvents}
      className="edit-container"
      style={
        isEditing && showActions
          ? {
              ...styles.editContainer,
              ...styles.editContainerHighlight
            }
          : styles.editContainer
      }
    >
      {children}
      {isEditing && showActions && (
        <div className="actions" style={styles.actions}>
          <button
            className="cancel-icon"
            style={styles.button}
            onClick={stopEditing}
          >
            <label  style={styles.icon} >x</label>
          </button>
          {handleDelete &&
            !disableDelete && (
              <div
                className="delete-icon"
                style={styles.button}
                onClick={handleDelete}
              >
                <label  style={styles.icon} >x</label>
              </div>
            )}
          <button
            className="save-icon"
            type="submit"
            style={{...styles.button, ...styles.saveButton}}
            onClick={onSave}
          >
            <label style={styles.icon}>&#10003;</label>
          </button>
        </div>
      )}
      {/*{!isEditing && (*/}
      {/*  <div className="actions" style={{...styles.actions, backgroundColor: 'none'}}>*/}
      {/*    <button*/}
      {/*      className="edit-icon"*/}
      {/*      style={styles.button}*/}
      {/*      onClick={startEditing}*/}
      {/*    >*/}
      {/*      <Icon name={"pencil"} style={styles.icon} />*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};


EditorWrapper.propTypes = {
  theme: PropTypes.object,
  startEditing: PropTypes.func,
  stopEditing: PropTypes.func,
  onSave: PropTypes.func,
  handleDelete: PropTypes.func,
  isEditing: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disableDelete: PropTypes.bool,
  isContentClickTarget: PropTypes.bool,
}

EditorWrapper.defaultProps = {
  isEditing: false,
  fullWidth: false,
  disableDelete: false,
  isContentClickTarget: true,
  showActions:true
}

export default EditorWrapper;
