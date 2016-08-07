import InputService from './input.service';
import InputComponent from './input.component';
import InputStorage from './input-storage'

const input = angular
	.module('input', [ InputStorage ])
	.component('inputComponent', InputComponent)
	.service('InputService', InputService)
	.name;

export default input;