class InputController {

	constructor(YoutubeService, VimeoService, InputService, InputStorageService) {
		this.youtubeService = YoutubeService;
		this.vimeoService = VimeoService;
		this.InputService = InputService;
		this.InputStorageService = InputStorageService;
	}

	$onInit() {
		this.url = "";
		this.validUrl = "";
		this.data = {};
	}

	submit() {
		var q = "";
		this.validUrl = this.InputService.validateUrl(this.url);
		console.log(this.validUrl);
		if (this.validUrl === "youtube") {
			q = this.InputService.youtubeQuery(this.url);
			this.data = this.youtubeService.search(q);
		} else if (this.validUrl === "vimeo") {
			q = this.InputService.vimeoQuery(this.url);
			this.data = this.vimeoService.search(q);
		} 
		if (q != "") {
			this.InputStorageService.set(q, this.data);
		}
		this.url = "";
		this.validUrl = "";
		this.data = {};
	}
}

InputController.$inject = ['YoutubeService', 'VimeoService', 'InputService', 'InputStorageService'];

export default InputController;