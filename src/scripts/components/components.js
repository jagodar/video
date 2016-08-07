import Youtube from './youtube';
import Vimeo from './vimeo';
import Input from './input';
import InputStorage from './input/input-storage'
const components = angular
  .module('app.components', [
  		Youtube,
  		Vimeo,
  		Input,
  		InputStorage
  	])
  .name;

export default components;