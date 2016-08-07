import InputStorageService from './input-storage.service'

const inputStorage = angular
	.module('inputStorage', [])
	.service('InputStorageService', InputStorageService)
	.name

export default inputStorage;