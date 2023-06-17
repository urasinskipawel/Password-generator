import { generatePassword } from './utils/generate-password.js';
import { copyPassword } from './utils/copy-password.js';
import { copyBtn, generateBtn, subBtn, addBtn, pwLength } from './utils/get-dom-elements.js';
import { validateValue } from './utils/validate-value.js';

let pwLengthNumber = Number(pwLength.value);

const convertToNumber = value => {
	pwLengthNumber = Number(value);
};

const assignToValue = () => {
	pwLength.value = pwLengthNumber;
};

// Event listeners
copyBtn.addEventListener('click', copyPassword);
generateBtn.addEventListener('click', generatePassword);
subBtn.addEventListener('click', () => {
	validateValue(pwLengthNumber);
	convertToNumber(pwLength.value);
	pwLengthNumber -= 1;
	assignToValue();
});

addBtn.addEventListener('click', () => {
	validateValue(pwLengthNumber);
	convertToNumber(pwLength.value);
	pwLengthNumber += 1;
	assignToValue();
});

pwLength.addEventListener('keyup', e => {
	if (e.keyCode === 13) validateValue(pwLengthNumber);
	convertToNumber(pwLength.value);
});

generatePassword();

export { pwLengthNumber };
