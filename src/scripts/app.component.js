const AppComponent = {
	template: `
		<!-- Header -->
		  <md-toolbar layout="row" >
		    <h1>Movies stock</h1>
		  </md-toolbar>
		
		<!-- Input -->
		  <md-input-container flex layout="row">
		    <label>Enter URL: </label>
		    <input type="text"></input>
		  </md-input-container>

		  <!-- Gallery -->
	    <div ng-view></div>
	`
};

export default AppComponent;