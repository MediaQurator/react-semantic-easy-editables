import React, {useRef} from 'react'
import PropTypes from 'prop-types'

import Editable from './Editable'
import SelectorEditor from '../editingTools/SelectorEditor'


function EditableSelection({ content, children, SelectorElement, EditorProps, onSave, isDoubleClick,onToggleEdit,...otherProps } ){
  const editableRef = useRef();
  function handleSave (obj, e){
    onSave(obj);
    const faveEvent = {
      stopPropagation:() => {}
    }
    editableRef.current.stopEditing(faveEvent);
  }
  function handleCancel (){
    const faveEvent = {
      stopPropagation:() => {}
    }
    editableRef.current.stopEditing(faveEvent);
  }
  function handleToggleEdit(editing, content){
    onToggleEdit(editing, content)
  }
  const _EditorProps = Object.assign({},EditorProps, {onToggleEdit:handleToggleEdit} )
  return (
    <Editable
      ref={editableRef}
      Editor={SelectorEditor}
      SelectorElement={SelectorElement}
      EditorProps={_EditorProps}
      handleSave={handleSave}
      handleCancel={handleCancel}
      content={content}
      isDoubleClick={isDoubleClick}
      showChildren={false}
      showActions={false}
      { ...otherProps }>
      {children}
    </Editable>
  );
}

EditableSelection.propTypes = {
  content: PropTypes.shape({ imageSrc: PropTypes.string, caption: PropTypes.string, title: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  styles: PropTypes.shape({ container: PropTypes.object, image: PropTypes.object }),
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ image: PropTypes.object, caption: PropTypes.object, title: PropTypes.object }),
}
export default EditableSelection;
