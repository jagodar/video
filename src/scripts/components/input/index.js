import InputComponent from './input.component';

const input = angular
	.module('input', [])
	.component('inputComponent', InputComponent)
	.name;

export default input;