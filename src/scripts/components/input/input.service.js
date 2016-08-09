class InputService {

	validateUrl(url){
		const vimeoRegExp = /^(https?\:\/\/)?(www\.)?(vimeo.com)\/.+$/;
		const vimeoID = /\d+/;
		const youtubeRegExp = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
		
		const validVimeoID = vimeoID.test(url);
		const validVimeo = vimeoRegExp.test(url);
		const validYoutube = youtubeRegExp.test(url);

		if (validYoutube) {
			return "youtube";
		} else if (validVimeo || validVimeoID) {
			return "vimeo";
		} else {
			return "youtube";
		}
	}

	vimeoQuery(url) {
		return url.substring(url.lastIndexOf('/') + 1);
	}

	youtubeQuery(url) {
		if (url.indexOf('v=') != -1) {
			var id = url.split('v=')[1];
			const ampersand = id.indexOf('&');
			if (ampersand != -1) {
				id = id.substring(0, ampersand);
			}
			return id;
		} else {
			return url.substring(url.lastIndexOf('/') + 1);
		}

	}
}

export default InputService;