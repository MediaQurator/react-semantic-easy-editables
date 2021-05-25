

import React from 'react';
import {default as ComponentTest} from '../src/editables/EditableSelection'
import Modal from "./componentsUtils/Modal"


const Template = (args) =>  {
  const [openModal, setOpenModal] = React.useState(false)
  const [selection, setSelection] = React.useState(args.content)
  function onSave(e){
    setSelection(e);
  }
  function handleCancel(){
    setOpenModal(false)
  }

  function handleToggleEdit(editing){
    setOpenModal(editing)
  }
  function handleOpenEdit(editing){
    setOpenModal(true)
  }

  const EditorProps = {
    selection,
    open:openModal
  }
  return  <div className="header-content">
    <button onClick={handleOpenEdit}>Click to select here </button>
    <ComponentTest content={selection} onSave={onSave}
                   SelectorElement={Modal}
                   onCancel={handleCancel}
                   onToggleEdit={handleToggleEdit}
                   EditorProps={EditorProps}>
      <div >{selection.text}</div>
    </ComponentTest>
  </div>
};

// Each story then reuses that template
export const EditableSelectionTemplate1 = Template.bind({});

EditableSelectionTemplate1.args = {
  content:{ id:1, text:"Cuba" },
  parameters: {
    actions: {
      handles: ['click'],
    },
  }
};



// This default export determines where your story goes in the story list
export default {
  title: 'EditableSelection',
  component: EditableSelectionTemplate1,
};

