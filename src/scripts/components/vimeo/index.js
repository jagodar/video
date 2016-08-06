import VimeoService from './vimeo.service';

const vimeo = angular
	.module('vimeo', [])
	.service('VimeoService', VimeoService)
	.name

export default vimeo;