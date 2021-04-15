

import React from 'react';
import {default as ComponentTest} from '../src/editables/EditableSelection'
import Modal from "./componentsUtils/Modal"

import {default as ComponentTestText} from '../src/editables/EditableText'

const Template = (args) =>  {
  const [openModal, setOpenModal] = React.useState(false)
  const [selection, setSelection] = React.useState(args.content);
  const [title, setTitle] = React.useState(args.title)
  function onSaveTitle(e){
    setTitle(e)
  }
  function onSave(e){
    console.log("onSave", e)
    setSelection(e);
  }
  function handleCancel(){
    setOpenModal(false)
  }

  function handleToggleEdit(editing){
    setOpenModal(editing)
  }

  const EditorProps = {
    selection,
    open:openModal
  }
  return  <div className="header-content">
    <h4><ComponentTestText content={title} onSave={onSaveTitle} /></h4>

    <ComponentTest content={selection} onSave={onSave}
                   SelectorElement={Modal}
                   onCancel={handleCancel}
                   onToggleEdit={handleToggleEdit}
                   EditorProps={EditorProps}>
      <div>{selection.text}</div>
    </ComponentTest>
  </div>
};

// Each story then reuses that template
export const EditableSelectionTemplate1 = Template.bind({});

EditableSelectionTemplate1.args = {
  content:{ id:1, text:"Cuba" },
  title:{ text: "Editable Fields Demo!" },
  parameters: {
    actions: {
      handles: ['click'],
    },
  }
};



// This default export determines where your story goes in the story list
export default {
  title: 'EditableSelectionAndHeader',
  component: EditableSelectionTemplate1,
};

