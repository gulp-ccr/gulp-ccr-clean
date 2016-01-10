'use strict';

/**
 * Recipe:
 * clean build output
 *
 * Ingredients:
 * del
 *
 */
function cleanTask() {
	// lazy loading required modules.
	var del = require('del');

	return del(this.config.dest.path, this.config.options);
}

cleanTask.schema = {
	title: 'clean',
	description: '',
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

cleanTask.type = 'task';

module.exports = cleanTask;
