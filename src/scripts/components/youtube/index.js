import YoutubeService from './youtube.service';

const youtube = angular
	.module('youtube', [])
	.service('YoutubeService', YoutubeService)
	.name;

export default youtube;