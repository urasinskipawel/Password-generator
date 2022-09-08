import { generatePassword } from './utils/generate-password.js';
import { copyPassword } from './utils/copy-password.js';
import { copyBtn, generateBtn, subBtn, addBtn, pwLength } from './utils/get-dom-elements.js';

let pwLengthNumber = Number(pwLength.value);

// Event listeners
copyBtn.addEventListener('click', copyPassword);
generateBtn.addEventListener('click', generatePassword);
subBtn.addEventListener('click', () => {
	if (pwLengthNumber <= 1) return;
	pwLengthNumber -= 1;
	pwLength.value = pwLengthNumber;
});
addBtn.addEventListener('click', () => {
	if (pwLengthNumber >= 30) return;
	pwLengthNumber += 1;
	pwLength.value = pwLengthNumber;
});
pwLength.addEventListener('keyup', () => {
	pwLengthNumber = pwLength.value;
});

generatePassword();

export { pwLengthNumber };
