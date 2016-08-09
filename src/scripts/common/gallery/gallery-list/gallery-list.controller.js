class GalleryListController {
	constructor($scope, GalleryService, svg) {
		$scope.GalleryService = GalleryService;
	}
	
	favoritesChange(video) {
		video.favorites = !video.favorites;
	}
	delete() {

	}
}

GalleryListController.$inject = ['$scope', 'GalleryService'];
export default GalleryListController;