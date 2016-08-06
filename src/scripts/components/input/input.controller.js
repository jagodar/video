class InputController {

	constructor(YoutubeService, VimeoService, InputService) {
		this.youtubeService = YoutubeService;
		this.vimeoService = VimeoService;
		this.InputService = InputService;
	}

	$onInit() {
		this.url = "";
		this.validUrl = "";
	}

	submit() {
		this.validUrl = this.InputService.validateUrl(this.url);
		if (this.validUrl === "youtube") {
			this.youtubeService.search(this.url, console.log);
		} else if (this.validUrl === "vimeo") {
			let q = this.InputService.vimeoQuery(this.url);
			this.vimeoService.search(q, console.log);
		} 
		this.url = "";
	}
}

InputController.$inject = ['YoutubeService', 'VimeoService', 'InputService'];

export default InputController;