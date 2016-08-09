import controller from './gallery-card.controller';

const GalleryCardComponent = {
	template: `
		<md-card ng-repeat="video in GalleryService.database">
			<img ng-src={{video.thumbnails.medium}} class="md-card-image">
			<md-card-title>
	        	<md-card-title-text>
	        		<span class="md-headline">{{video.title}}</span>
	        	</md-card-title-text>
	        </md-card-title>
	        <md-card-content>
	        	<p>Likes: {{video.likes}} </p>
	        	<p>Views: {{video.views}} </p> 
	        	<md-button class="md-icon-button" aria-label="Delete" ng-click=delete();>
			    	<ng-md-icon icon="clear" style="fill: #939393"></ng-md-icon>
			    </md-button>
			    <md-button ng-if="video.favorites" class="md-icon-button" ng-click="favoritesChange(video)" aria-label="Favorite">
			    	<ng-md-icon icon="favorite" style="fill: #ff4f4f"></ng-md-icon>
			    </md-button>
			    <md-button ng-if="!video.favorites" class="md-icon-button" ng-click="favoritesChange(video)" aria-label="Favorite">
			    	<ng-md-icon icon="favorite_border" style="fill: #939393"></ng-md-icon>
			    </md-button>
	        </md-card-content>
		</md-card>
	`,
	controller
}

export default GalleryCardComponent;
