module.exports = {
	// Disable warning in development mode
	chainWebpack: (config) => {
		config.plugins.delete('friendly-errors')
	},

	// Disable warnings in production mode
	configureWebpack: {
		stats: {
			warnings: false,
		},
	},
}
