import GalleryList from './gallery-list'
import GalleryComponent from './gallery.component';
import GalleryService from './gallery.service';

const gallery = angular
	.module('gallery', [ GalleryList ])
	.component('galleryComponent', GalleryComponent)
	.service('GalleryService', GalleryService)
	.name

export default gallery;