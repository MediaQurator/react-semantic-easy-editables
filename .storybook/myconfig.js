// import React from 'react';
// import { configure, addDecorator } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { withNotes } from '@storybook/addon-notes';
// /**
//  * Uses Webpack Context
//  * https://webpack.js.org/guides/dependency-management/#require-context
//  * We are importing all stories from the packages directory.
//  * If required we can update this to start at route, but for now lets
//  * keep it at components.
//  */
// const req = require.context('../src', true, /.stories.(jsx?|js?)$/);
// function loadStories() {
// 	req.keys().forEach(filename => req(filename));
// }
// addDecorator(withNotes);
// addDecorator(withInfo({ inline: true, header: true }));
//
// configure(loadStories, module);
