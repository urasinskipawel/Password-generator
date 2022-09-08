import { pwText, securityStatusText } from './get-dom-elements.js';
import { pwLengthNumber } from '../app.js';

const copyPassword = () => {
	const textarea = document.createElement('textarea');
	const password = pwText.innerText;
	if (!password) {
		alert(`There's nothing to copy`);
	} else {
		textarea.value = password;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();
		alert(`Password copied to clipboard. Your password security level is ${securityStatusText.textContent} and has ${pwLengthNumber} chars`);
	}
};

export { copyPassword };
