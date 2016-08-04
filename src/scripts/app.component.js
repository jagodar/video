const AppComponent = {
	template: `
		<!-- Header -->
		  <md-toolbar layout="row" >
		    <h1>Movies stock</h1>
		  </md-toolbar>

		  <!-- Input -->
		  <input-component></input-component>

		<!-- Gallery -->
	    <div ng-view></div>
	`
};

export default AppComponent;