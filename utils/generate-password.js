import { generateStatus } from './generate-status.js';
import { pwText, upperBox, lowerBox, signBox, numberBox } from './get-dom-elements.js';
import { getUpperLetter, getLowerLetter, getNumber, getSign } from './get-random-symbols.js';
import { validateValue } from './validate-value.js';
import { pwLength } from './get-dom-elements.js';

const generateCheckedSymbol = () => {
	const randomArr = [];
	if (upperBox.checked) {
		randomArr.push(getUpperLetter());
	}
	if (lowerBox.checked) {
		randomArr.push(getLowerLetter());
	}
	if (numberBox.checked) {
		randomArr.push(getNumber());
	}
	if (signBox.checked) {
		randomArr.push(getSign());
	}
	return randomArr[Math.floor(Math.random() * randomArr.length)];
};

const generatePassword = () => {
	let password = '';
	if (!upperBox.checked && !lowerBox.checked && !numberBox.checked && !signBox.checked) {
		alert('You have to check at least one option to build the password');
		return (pwText.innerText = '');
	}
	validateValue(pwLength.value);
	for (let i = password.length; i < pwLength.value; i++) {
		password += generateCheckedSymbol();
	}
	generateStatus();
	return (pwText.innerText = password);
};

export { generatePassword };
