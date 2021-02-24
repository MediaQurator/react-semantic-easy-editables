

import React from 'react';
import { default as EditableSelectionTest } from '../src/editables/EditableSelection'
import Modal from "./componentsUtils/Modal"
import EditableParagraph from '../src/editables/EditableParagraph'
import { default as EditableText } from '../src/editables/EditableText'
import { EditablesContext, theme } from '../src/editables/EditablesContext';

const rootStyle = {
  width:"100%",
  height:"600px",
  textAlign:"center",
}
const mediaText = {
  border: "1px solid black",
  width:"100%",
  height:"400px",
  textAlign:"center",
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}
const headerTextStyle = {
  textAlign:"center",
  width:"100%",
}
const Template = (args) =>  {
  const [openModal, setOpenModal] = React.useState(false)
  const [selection, setSelection] = React.useState(args.content);
  const [header, setHeader] = React.useState(args.header)
  const [text, setText] = React.useState(args.text)

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

  function onSaveHeader(e){
    setHeader(e);
  }
  function onSaveText(e){
    setText(e);
  }
  const context = {theme, showEditingControls:true}
  return (
    <EditablesContext.Provider value={ context }>
      <div style={rootStyle}>

        <h1><EditableText content={header} onSave={onSaveHeader} /></h1>

        <div style={headerTextStyle}>
          <EditableParagraph content={text} onSave={onSaveText} />
        </div>

        <EditableSelectionTest content={selection} onSave={onSave}
                               SelectorElement={Modal}
                               onCancel={handleCancel}
                               isDoubleClick
                               onToggleEdit={handleToggleEdit}
                               EditorProps={EditorProps}>
          <div style={mediaText}>{selection.text}</div>
        </EditableSelectionTest>
      </div>
    </EditablesContext.Provider>
  )


};

// Each story then reuses that template
export const CenteredSlideTemplate = Template.bind({});

CenteredSlideTemplate.args = {
  content:{ id:1, text:"Asset 1" },
  text:{ text: "<p>My Asset is the best bla bla bla</p>" },
  header:{ text: "Asset Presentation" },

  parameters: {
    actions: {
      handles: ['click'],
    },
  }
};



// This default export determines where your story goes in the story list
export default {
  title: 'CenteredSlide',
  component: CenteredSlideTemplate,
};

