import { pwLength } from './get-dom-elements.js';
import { handleAlert } from './handle-alert.js';

const validateValue = inputValue => {
	if (inputValue >= 30 || inputValue <= 1) {
		handleAlert('The value of your password length must be between 1 and 30');
		pwLength.value = 25;
	}
};

export { validateValue };
