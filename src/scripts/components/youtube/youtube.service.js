class YoutubeService {

	search(query, callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + query + '&type=video&key=AIzaSyA8ngE7e1236movhXfRbRORTV7NbvuhomU',true);
		xhttp.send();
		var response = xhttp.responseText;
		console.log(response);
	}
}

export default YoutubeService;