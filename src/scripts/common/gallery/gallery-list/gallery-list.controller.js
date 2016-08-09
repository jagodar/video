class GalleryListController {
	constructor(GalleryService) {
		this.GalleryService = GalleryService;
	}
	
}

GalleryListController.$inject = ['GalleryService']
export default GalleryListController;