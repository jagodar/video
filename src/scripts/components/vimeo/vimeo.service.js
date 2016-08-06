class VimeoService {

	constructor($http) {
		this.$http = $http;
	}

	search(query, callback) {
		this.$http({
			method: 'GET',
			url: 'https://api.vimeo.com/videos/' + query,
			headers: {
				Authorization : "bearer 837710505a31ac4787e92e6ffa5b11c9"
			}
		}).then(function successCallback(response) {
			console.log(response.status);
			console.log(response.data);
		}, function errorCallback(response) {
			console.log(response.status);
		})
	}

}

VimeoService.$inject = ['$http'];

export default VimeoService;