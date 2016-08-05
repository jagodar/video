class YoutubeService {

	constructor($http) {
		this.$http = $http;
	}

	// AJAX

	searchAJAX(query, callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var response = xhttp.responseText;
				console.log(response);
			}
		}
		xhttp.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + query + '&type=video&key=AIzaSyA8ngE7e1236movhXfRbRORTV7NbvuhomU', true);
		xhttp.send();	
	}

	// Angular 

	 search(query, callback) {
		this.$http({
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + query + '&type=video&key=AIzaSyA8ngE7e1236movhXfRbRORTV7NbvuhomU'
		}).then(function successCallback(response) {
			console.log(response.status);
			console.log(response.data);
		}, function errorCallback(response) {
			console.log(response.status);
		})
	}

}

YoutubeService.$inject = ['$http'];

export default YoutubeService;