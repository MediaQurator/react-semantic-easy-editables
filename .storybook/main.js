const path = require('path');
const includePath = path.resolve(__dirname, '..');


module.exports = {
  "stories": [
    "../stories/*.stories.@(js|jsx|ts|tsx)",
		"../stories/*.stories.js"

	],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
		"@storybook/addon-controls"
  ],
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		// config.module.rules.push( {
		// 	test: /\.css$/,
		// 	// include: includePath,
		// 	use: ['style-loader', 'css-loader', 'postcss-loader'],
		// 	include: path.resolve(__dirname, '../'),
		// });
		config.module.rules = config.module.rules.filter(
			f => f.test.toString() !== '/\\.css$/'
		);

		config.module.rules.push(
			{
				test: /\.css$/,
				use: ['style-loader', {
					loader: 'css-loader'
					// options: {
					// 	modules: true, // Enable modules to help you using className
					// }
				}],
				include: path.resolve(__dirname, '../'),
			});
		// Return the altered config
		return config;
	}
}
