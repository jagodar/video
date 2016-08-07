import GalleryListComponent from './gallery-list.component';

const galleryList = angular
	.module('galleryList', [])
	.component('galleryList', GalleryListComponent)
	.name

export default galleryList;