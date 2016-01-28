'use strict';

var schema = {
	title: 'clean',
	description: 'Clean up destination folder.',
	type: 'object',
	properties: {
		dest: {
			description: 'The output path to clean.',
			type: 'path'
		},
		options: {
			type: 'object',
			properties: {
				force: {
					description: 'Allow deleting the current working directory and files/folders outside it.',
					type: 'boolean',
					default: false
				},
				dryRun: {
					description: 'See what would be deleted.',
					type: 'boolean',
					default: false
				}
			}
		}
	},
	required: ['dest']
};

function clean() {
	// lazy loading required modules.
	var del = require('del');

	return del(this.config.dest.path, this.config.options);
}

module.exports = clean;
module.exports.schema = schema;
module.exports.type = 'task';
