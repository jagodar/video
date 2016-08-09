class GalleryService {
	constructor(InputStorageService) {
		this.InputStorageService = InputStorageService;
		this.database = {}
	}

	loadDatabase() {
		for (var key in localStorage) {
			this.database[key] = this.InputStorageService.get(key);
		}
	}

	databaseChange() {
		window.addEventListener('storage', function(e) {
			this.database[e.key] = this.InputStorageService.get(e.key);
		});
	}
}

GalleryService.$inject = ['InputStorageService']
export default GalleryService;