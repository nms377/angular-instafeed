import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl, DefaultServiceName, DefaultService} from './default';
import {ListState, ListCtrl, ListServiceName, ListService} from './list';

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
		.state(DefaultState.name, DefaultState)
		.state(ListState.name, ListState)
		;
	})
	.run(($state) => {
		$state.go('default');
	})
  .directive('app', app)
  .controller(DefaultState.controller, DefaultCtrl)
  .controller(ListState.controller, ListCtrl)
  .service(DefaultServiceName, DefaultService)
  .service(ListServiceName, ListService);



export default MODULE_NAME;