import controller from './input.controller';

const InputComponent = {
	controller,
	template: `
			<form ng-submit="$ctrl.submit();">
				<md-input-container flex layout="row">
					<label>Enter URL: </label>
					<input type="text" ng-model="$ctrl.url"></input>
				</md-input-container>
			</form>		
	`
}

export default InputComponent;