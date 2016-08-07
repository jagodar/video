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
		if (this.validUrl === "youtube") {
			this.data = this.youtubeService.search(this.url);
		} else if (this.validUrl === "vimeo") {
			q = this.InputService.vimeoQuery(this.url);
			this.data = this.vimeoService.search(q);
		} 
		this.InputStorageService.set(q || this.url, this.data);
		this.url = "";
		this.data = {};
	}
}

InputController.$inject = ['YoutubeService', 'VimeoService', 'InputService', 'InputStorageService'];

export default InputController;