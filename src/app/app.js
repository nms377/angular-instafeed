import angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
	.config(($stateProvider) => {
		$stateProvider
	})
  .directive('app', app)

export default MODULE_NAME;