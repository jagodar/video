class InputStorageService {

/*
	var result = {
			title: data.snippet.title,
			id: data.id,
			embed: data.player,
			thumbnails: {
				small: data.snippet.thumbnails.default.url,
				medium: data.snippet.thumbnails.standard.url,
				high:data.snippet.thumbnails.maxres.url
			},
			likes: data.statistics.likeCount,
			views: data.statistics.viewCount
			favourites: false,
			date: new Date()
		};
*/

	set(key, value) {
		value = JSON.stringify(value);
		localStorage.setItem(key, value);
	}
	
	remove(key, value) {
		localStorage.removeItem(key);
	}

	get(key) {
		var value = localStorage.getItem(key);
		if (value[0] === "{") {
			value = JSON.parse(value);
		}
		return value;
	}

}

export default InputStorageService;