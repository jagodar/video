const themeConfig = ['$mdThemingProvider', function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
                      .primaryPalette("red");
}]

const ytApiConfig = function() {
	gapi.load('youtube', 'v3', 'client', () => {
		gapi.client.setApiKey('AIzaSyA8ngE7e1236movhXfRbRORTV7NbvuhomU');
		console.log("yt api loaded");	
	})
}

export { themeConfig, ytApiConfig };
