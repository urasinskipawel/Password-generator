import { securityStatus, securityStatusText, upperBox, lowerBox, signBox, numberBox } from './get-dom-elements.js';
import { pwLengthNumber } from '../app.js';

const icon = document.createElement('i');

const addStatus = (mood, color, faIcon) => {
	securityStatusText.textContent = mood;
	securityStatus.style.backgroundColor = color;
	icon.classList.value = '';
	if (icon.classList.value === '') {
		icon.classList.add('fas', faIcon);
		securityStatus.appendChild(icon);
	}
};
// Generate properly password status
const generateStatus = () => {
	if (
		(!upperBox.checked && !lowerBox.checked && !numberBox.checked) ||
		(!upperBox.checked && !lowerBox.checked && !signBox.checked) ||
		(!upperBox.checked && !numberBox.checked && !signBox.checked) ||
		(!lowerBox.checked && !numberBox.checked && !signBox.checked) ||
		pwLengthNumber <= 6
	) {
		addStatus('Weak', '#ab0227', 'fa-frown');
	} else if (
		(!numberBox.checked && !signBox.checked) ||
		(!lowerBox.checked && !signBox.checked) ||
		(!lowerBox.checked && !numberBox.checked) ||
		(!upperBox.checked && !signBox.checked) ||
		(!upperBox.checked && !numberBox.checked) ||
		(!upperBox.checked && !lowerBox.checked) ||
		pwLengthNumber <= 12
	) {
		addStatus('Medium', '#e1620e', 'fa-meh');
	} else if (!upperBox.checked || !lowerBox.checked || !numberBox.checked || !signBox.checked || pwLengthNumber <= 20) {
		addStatus('Strong', '#08cc2f', 'fa-smile');
	} else {
		addStatus('Protected', '#0532ffe6', 'fa-grin-stars');
	}
};

export { generateStatus };
