import Youtube from './youtube';
import Vimeo from './vimeo';
import Input from './input';

const components = angular
  .module('app.components', [
  		Youtube,
  		Vimeo,
  		Input
  	])
  .name;

export default components;