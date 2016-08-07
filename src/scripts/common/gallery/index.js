import GalleryComponent from './gallery.component';
import GalleryService from './gallery.service';

const gallery = angular
	.module('gallery', [])
	.component('galleryComponent', GalleryComponent)
	.service('GalleryService', GalleryService)
	.name

export default gallery;