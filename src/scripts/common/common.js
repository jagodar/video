import Gallery from './gallery';

const common = angular
  .module('app.common', [ Gallery ])
  .name;

export default common;