const template = require('./template.html');

export const ListState = {
	name: 'list',
	url: 'api/instafeed/list',
	template,
	controller: 'ListCtrl',
	controllerAs: 'list'
};