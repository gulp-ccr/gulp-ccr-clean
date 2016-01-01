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

	return del(this.config.dest.path);
}

cleanTask.schema = {
	title: 'clean',
	description: '',
	properties: {
		dest: {
			description: ''
		}
	},
	required: ['dest']
};

cleanTask.type = 'task';

module.exports = cleanTask;
