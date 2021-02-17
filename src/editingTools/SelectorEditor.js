import React, {useEffect} from "react";

function SelectorEditor({EditorProps, content, handleSave, handleCancel ,SelectorElement, onContentChange }){


  const {onToggleEdit} = EditorProps;
  useEffect(() => {
    onToggleEdit(true)
    // Specify how to clean up after this effect:
    return function cleanup() {
      onToggleEdit(false, content)
    };
  });

  function onSelect(obj,e){
    onContentChange(obj);
    handleSave(obj,e);
  }

  if(SelectorElement) {
    return <SelectorElement
      {...EditorProps}
      onCancel={handleCancel}
      onSelect={onSelect}
    />
  }
  return null;
}

export default SelectorEditor;
