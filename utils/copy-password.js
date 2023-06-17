import { pwText, securityStatusText } from './get-dom-elements.js';
import { pwLength } from './get-dom-elements.js';
import { handleAlert } from './handle-alert.js';

const copyPassword = () => {
	const textarea = document.createElement('textarea');
	const password = pwText.innerText;
	if (!password) {
		handleAlert("There's nothing to copy", 'Oops...', 'question');
	} else {
		textarea.value = password;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();
		handleAlert(
			`Password copied to clipboard. Your password security level is ${securityStatusText.textContent} and has ${pwLength.value} chars`,
			'Success!',
			'success'
		);
	}
};

export { copyPassword };
