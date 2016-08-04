const themeConfig = ['$mdThemingProvider', function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
                      .primaryPalette("red");
}]

const ytApiConfig = function() {
	gapi.load('client', () => {
		gapi.client.setApiKey('AIzaSyA8ngE7e1236movhXfRbRORTV7NbvuhomU');
		console.log("helllo, yt api here");	
	})
}

export { themeConfig, ytApiConfig };
