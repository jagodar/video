class YoutubeService {
	search(query, callback) {
		const request = gapi.youtube.search.list({
			q: query,
			type: 'video',
			part: 'snippet'
		});

		request.execute(function(response) {
			const str = JSON.stringify(response.result);
			callback(str);
		})
	}
}

export default YoutubeService;