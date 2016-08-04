import controller from './input.controller';

const InputComponent = {
	controller,
	template: `
		
			<md-input-container flex layout="row" ng-submit="$ctrl.submit();">
				<label>Enter URL: </label>
				<input type="text" ng-model="$ctrl.url"></input>
			</md-input-container>
			<md-button ng-click="$ctrl.submit();">Add</md-button>
		
	`
}

export default InputComponent;