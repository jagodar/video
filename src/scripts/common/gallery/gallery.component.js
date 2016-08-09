import controller from './gallery.controller';

const GalleryComponent = {
	controller,
	template: `
		<nav class="nav">
			<md-button class="md-icon-button" ng-click="list=true" aria-label="ViewList">
				<ng-md-icon icon="view_list" style="fill: #939393"></ng-md-icon>
			</md-button>
			<md-button class="md-icon-button" ng-click="list=false" aria-label="ViewCard">
				<ng-md-icon icon="view_module" style="fill: #939393"></ng-md-icon>
			</md-button>
		<nav>
		<gallery-list ng-if="list"></gallery-list>
		<gallery-card ng-if="!list"></gallery-card>
	`
}

export default GalleryComponent;