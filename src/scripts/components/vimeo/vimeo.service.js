class VimeoService {

	constructor($http, InputStorageService) {
		this.$http = $http;
		this.InputStorageService = InputStorageService;
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
			console.log(response.status);
			console.log(response.data);
			self.InputStorageService.set(query, response);
		}, function errorCallback(response) {
			console.log(response.status);
		})
	}

}

VimeoService.$inject = ['$http', 'InputStorageService'];

export default VimeoService;