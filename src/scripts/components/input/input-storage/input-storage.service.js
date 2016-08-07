class InputStorageService {

	set(key, value) {
		value = JSON.stringify(value);
		localStorage.setItem(key, value);
	}

	get(key) {
		var value = localStorage.getItem(key);
		if (value[0] === "{") {
			value = JSON.parse(value);
		}
		return value;
	}

}

export default InputStorageService;