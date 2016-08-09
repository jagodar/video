import controller from './gallery-list.controller';

const GalleryListComponent = {
	controller,
	template: `
		<md-list>
		  <md-list-item ng-repeat="video in GalleryService.database" class="noright">
		    <img ng-src="{{ video.thumbnails.small }}" class="md-avatar" />
		    <div class="md-list-item-text" layout="column">
		    <h3>{{video.title}}</h3>
		    <p>Likes: {{video.likes}}</p>
		    <p>Views: {{video.views}}</p>
		    </div>
		  </md-list-item>
		</md-list>
	`
}

export default GalleryListComponent;