class InputService {

	validateUrl(url){
		const vimeoRegExp = /^(https?\:\/\/)?(www\.)?(vimeo.com)\/.+$/;
		const vimeoID = /\d+/;

		const validVimeoID = vimeoID.test(url);
		const validVimeo = vimeoRegExp.test(url);

		return (validVimeo || validVimeoID) ? "vimeo" : "youtube";
	}

	vimeoQuery(url) {
		return url.substring(url.lastIndexOf('/') + 1);
	}

}

export default InputService;