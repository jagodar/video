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

const vimeoApiConfig = ['$http', function($http) {
	$http({
		method: 'POST',
		url: 'https://api.vimeo.com/oauth/authorize/client',
		headers: {
			Authorization : "bearer 837710505a31ac4787e92e6ffa5b11c9"
		},
		params: {
			grant_type: 'client_credentials'
		}
	})
}]
export { themeConfig, ytApiConfig, vimeoApiConfig };
