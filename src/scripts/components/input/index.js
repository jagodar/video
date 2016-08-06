import InputService from './input.service';
import InputComponent from './input.component';

const input = angular
	.module('input', [])
	.component('inputComponent', InputComponent)
	.service('InputService', InputService)
	.name;

export default input;