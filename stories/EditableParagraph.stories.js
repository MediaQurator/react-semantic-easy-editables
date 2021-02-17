

import React from 'react';
import {default as ComponentTest} from '../src/editables/EditableParagraph'

const Template = (args) =>  {
  const [value, setValue] = React.useState(args.value)
  function onSave(e){
    setValue(e)
  }
  return  <div className="header-content">
    <ComponentTest content={value} onSave={onSave} />
  </div>
};

// Each story then reuses that template
export const EditableParagraph = Template.bind({});

EditableParagraph.args = {
  value:{ text: "<p>This package makes it easy to implement on-page editing in your awesome React project. Feel free to test it out!</p><p>Toggle <strong>Show editable fields</strong> to switch between the editing interface and the default view.</p>" },
  parameters: {
    actions: {
      handles: ['click'],
    },
  }
};



// This default export determines where your story goes in the story list
export default {
  title: 'EditableParagraph',
  component: EditableParagraph,
};

