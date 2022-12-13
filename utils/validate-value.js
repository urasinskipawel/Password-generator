import { pwLengthNumber } from '../app.js';
import { pwLength } from './get-dom-elements.js';

const validateValue = inputValue => {
	if (inputValue > 30 || inputValue < 1) {
		alert('The value of your password length must be between 1 and 30');
		pwLength.value = 25;
	}
};

export { validateValue };
