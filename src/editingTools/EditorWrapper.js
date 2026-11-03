import React, {useState} from "react";
import PropTypes from "prop-types";

const ActionButton = ({ styles, variant, label, className, onClick, type = "button", children }) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState(false);

  const isSave = variant === "save";
  const style = {
    ...styles.button,
    ...(isSave ? styles.saveButton : null),
    ...(hover ? (isSave ? styles.saveButtonHover : styles.cancelButtonHover) : null),
    ...(focus ? styles.buttonFocus : null),
    ...(active ? styles.buttonActive : null)
  };

  return (
      <button
          type={type}
          className={className}
          aria-label={label}
          title={label}
          style={style}
          onClick={onClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => { setHover(false); setActive(false); }}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
      >
        {children}
      </button>
  );
};

const CancelIcon = ({ styles }) => (
    <>
      <span aria-hidden="true" style={{...styles.cancelIconBar, transform: "translate(-50%, -50%) rotate(45deg)"}}/>
      <span aria-hidden="true" style={{...styles.cancelIconBar, transform: "translate(-50%, -50%) rotate(-45deg)"}}/>
    </>
);

const SaveIcon = ({ styles }) => <span aria-hidden="true" style={styles.saveIcon}/>;

const EditorWrapper = ({ theme, startEditing, stopEditing, isEditing, fullWidth, onSave, handleDelete, disableDelete, isDoubleClick, isContentClickTarget, showActions, children }) => {
  let styles = theme;

  if (fullWidth) {
    styles = {
      ...styles,
      editContainer: {
        ...styles.editContainer,
        padding: "0",
        marginBottom: "0",
        position: "relative"
      },
      actions: {
        ...styles.actions,
        top: "6px"
      }
    };
  }

  let propsEvents = {
    onClick: isContentClickTarget ? startEditing : null
  };
  if (isDoubleClick) {
    propsEvents = {
      onDoubleClick: isContentClickTarget ? startEditing : null
    };
  }
  return (
      <div
          {...propsEvents}
          className="edit-container"
          style={
            isEditing && showActions
                ? {...styles.editContainer, ...styles.editContainerHighlight, position: "relative"}
                : {...styles.editContainer, position: "relative"}
          }
      >
        {children}
        {isEditing && showActions && (
            <div className="actions" style={styles.actions}>
              {handleDelete && !disableDelete && (
                  <ActionButton styles={styles} variant="cancel" label="Cancel" className="delete-icon" onClick={handleDelete}>
                    <CancelIcon styles={styles}/>
                  </ActionButton>
              )}
              <ActionButton styles={styles} variant="save" label="Save" className="save-icon" type="submit" onClick={onSave}>
                <SaveIcon styles={styles}/>
              </ActionButton>
            </div>
        )}
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
  showActions: PropTypes.bool
};

EditorWrapper.defaultProps = {
  isEditing: false,
  fullWidth: false,
  disableDelete: false,
  isContentClickTarget: true,
  showActions: true
};

export default EditorWrapper;
