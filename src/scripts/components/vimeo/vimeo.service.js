class VimeoService {

	constructor($http, InputStorageService) {
		this.$http = $http;
		this.InputStorageService = InputStorageService;
	}

	processData(data) {
		var result = {
			title: data.name,
			id: data.uri,
			embed: data.embed,
			thumbnails: {
				small: data.pictures.sizes[1].link,
				medium: data.pictures.sizes[3].link,
				high:data.pictures.sizes[5].link			
			},
			likes: data.metadata.connections.likes.total,
			views: data.stats.plays,
			favourites: false,
			date: new Date()
		};
		return result;
	}
	
	search(query) {
		var self = this;
		this.$http({
			method: 'GET',
			url: 'https://api.vimeo.com/videos/' + query,
			headers: {
				Authorization : "bearer 837710505a31ac4787e92e6ffa5b11c9"
			}
		}).then(function successCallback(response) {
			self.InputStorageService.set(query, self.processData(response.data));
		}, function errorCallback(response) {
			console.log(response.status);
		})
	}

}

VimeoService.$inject = ['$http', 'InputStorageService'];

export default VimeoService;