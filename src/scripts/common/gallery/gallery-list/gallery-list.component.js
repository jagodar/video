import controller from './gallery-list.controller';

const GalleryListComponent = {
	template: `
		<md-list>
		  <md-list-item ng-repeat="video in GalleryService.database" ng-click="click()" class="noright">
		    <img ng-src="{{ video.thumbnails.small }}"  />
		    <div class="md-list-item-text" layout="column">
			    <h3>{{video.title}}</h3>
			    <p>Likes: {{video.likes}}</p>
			    <p>Views: {{video.views}}</p>
		    </div>
		    <div layout="column" class="md-secondary md-icon-button">
			    <md-button class="md-icon-button" aria-label="Delete" ng-click=delete();>
			    	<ng-md-icon icon="clear" style="fill: #939393"></ng-md-icon>
			    </md-button>
			    <md-button ng-if="video.favorites" class="md-icon-button" ng-click="favoritesChange(video)" aria-label="Favorite">
			    	<ng-md-icon icon="favorite" style="fill: #ff4f4f"></ng-md-icon>
			    </md-button>
			    <md-button ng-if="!video.favorites" class="md-icon-button" ng-click="favoritesChange(video)" aria-label="Favorite">
			    	<ng-md-icon icon="favorite_border" style="fill: #939393"></ng-md-icon>
			    </md-button>
		    </div>
		  </md-list-item>
		</md-list>
	`,
	controller
}

export default GalleryListComponent;

