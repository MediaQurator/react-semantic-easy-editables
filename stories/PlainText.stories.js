

import React from 'react';
import {default as ComponentTest} from '../src/editables/EditableText'

const Template = (args) =>  {
  const [title, setTitle] = React.useState(args.title)
  function onSave(e){
    setTitle(e)
  }
  return  <div className="header-content">
    <h1><ComponentTest content={title}
                       EditorProps={{
                         uppercase:true
                       }}
                       onSave={onSave} /></h1>
  </div>
};

// Each story then reuses that template
export const EditableText = Template.bind({});

EditableText.args = {
  title:{ text: "Editable Fields Demo!" },
  parameters: {
    actions: {
      handles: ['click'],
    },
  }
};



// This default export determines where your story goes in the story list
export default {
  title: 'EditableText',
  component: EditableText,
};

