import controller from './gallery.controller';
/*
	1. Make single card template
	2. Make grid and list
	3. Add pagination 

*/
const GalleryComponent = {
	controller,
	template: `
		<md-subheader>gallery-list</md-subheader>
		<gallery-list></gallery-list>
	`
}

export default GalleryComponent;