class GalleryCardController {
	constructor($scope, GalleryService, svg) {
		$scope.GalleryService = GalleryService;
	}
	
	favoritesChange(video) {
		video.favorites = !video.favorites;
	}
	delete() {
		
	}
}

GalleryCardController.$inject = ['$scope', 'GalleryService'];
export default GalleryCardController;