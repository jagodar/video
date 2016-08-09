const GalleryRun = ['GalleryService' , function(GalleryService) {
	GalleryService.loadDatabase();
	GalleryService.databaseChange();
}]

export default GalleryRun;