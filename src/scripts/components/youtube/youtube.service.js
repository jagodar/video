class YoutubeService {

	constructor($http, InputStorageService) {
		this.$http = $http;
		this.InputStorageService = InputStorageService;
	}

	// AJAX

	searchAJAX(query) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var response = xhttp.responseText;
				console.log(response);
				return response;
			}
		}
		xhttp.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + query + '&type=video&key=AIzaSyA8ngE7e1236movhXfRbRORTV7NbvuhomU', true);
		xhttp.send();	
	}

	// Angular 

	search(query) {
		var self = this;
		this.$http({
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + query + '&type=video&key=AIzaSyA8ngE7e1236movhXfRbRORTV7NbvuhomU'
		}).then(function successCallback(response) {
			self.InputStorageService.set(query, response.data.items[0]);
		}, function errorCallback(response) {
			console.log(response.status);
		})
	}	

}

YoutubeService.$inject = ['$http', 'InputStorageService'];

export default YoutubeService;