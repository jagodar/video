import GalleryList from './gallery-list'
import GalleryComponent from './gallery.component';
import GalleryService from './gallery.service';
import GalleryRun from './gallery.run';

const gallery = angular
	.module('gallery', [ GalleryList ])
	.component('galleryComponent', GalleryComponent)
	.service('GalleryService', GalleryService)
	.run(GalleryRun)
	.name

export default gallery;