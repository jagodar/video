import angular from 'angular';
// import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import AppComponent from './app.component';
import * as config from './app.config';
import Components from './components/components';
import Common from './common/common';

const root = angular
	.module('app', [
		Components,
		Common,
		ngMaterial
	])
	.component('app', AppComponent)
	.config(config.themeConfig)
	.name;

export default root;