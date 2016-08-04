class InputController {
	constructor(YoutubeService) {
		this.youtubeService = YoutubeService;
	}

	$onInit() {
		this.url = "";
	}

	submit() {
		if (this.url != "") {
			this.youtubeService.search(this.url, console.log);
		}
	}
}

InputController.$inject = ['YoutubeService'];

export default InputController;