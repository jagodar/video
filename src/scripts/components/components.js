import Youtube from './youtube';
import Input from './input'
const components = angular
  .module('app.components', [
  		Youtube,
  		Input
  	])
  .name;

export default components;