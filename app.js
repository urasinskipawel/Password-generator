const pwText = document.querySelector('.generator-form-text');
const copyBtn = document.querySelector('.fa-copy');
const generateBtn = document.querySelector('.generator-password-btn');
const subBtn = document.querySelector('.generator-length-sub');
const addBtn = document.querySelector('.generator-length-add');
const pwLength = document.querySelector('.generator-length-value input');
const upperBox = document.querySelector('.upper input');
const lowerBox = document.querySelector('.lower input');
const numberBox = document.querySelector('.number input');
const signBox = document.querySelector('.sign input');
const securityStatus = document.querySelector('.generator-security-status');
const securityStatusText = document.querySelector(
	'.generator-security-status p'
);
console.log(pwLength);
const icon = document.createElement('i');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = upperLetters.toLowerCase();
const numbers = '123456789';
const signs = '~!@#$%^&*()_-+=';

let pwLengthNumber = Number(pwLength.value);

const getUpperLetter = () =>
	upperLetters[Math.floor(Math.random() * upperLetters.length)];

const getLowerLetter = () =>
	lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

const getNumber = () => numbers[Math.floor(Math.random() * numbers.length)];

const getSign = () => signs[Math.floor(Math.random() * signs.length)];

const generateStatus = () => {
	if (
		(!upperBox.checked && !lowerBox.checked && !numberBox.checked) ||
		(!upperBox.checked && !lowerBox.checked && !signBox.checked) ||
		(!upperBox.checked && !numberBox.checked && !signBox.checked) ||
		(!lowerBox.checked && !numberBox.checked && !signBox.checked)
	) {
		securityStatusText.textContent = 'Weak';
		securityStatus.style.backgroundColor = '#ab0227';
		icon.classList.value = '';
		if (icon.classList.value === '') {
			icon.classList.add('fas', 'fa-frown');
			securityStatus.appendChild(icon);
		}
	} else if (
		(!numberBox.checked && !signBox.checked) ||
		(!lowerBox.checked && !signBox.checked) ||
		(!lowerBox.checked && !numberBox.checked) ||
		(!upperBox.checked && !signBox.checked) ||
		(!upperBox.checked && !numberBox.checked) ||
		(!upperBox.checked && !lowerBox.checked)
	) {
		securityStatusText.textContent = 'Medium';
		securityStatus.style.backgroundColor = '#e1620e';
		icon.classList.value = '';
		if (icon.classList.value === '') {
			icon.classList.add('fas', 'fa-meh');
			securityStatus.appendChild(icon);
		}

		console.log(icon.classList);
	} else if (
		!upperBox.checked ||
		!lowerBox.checked ||
		!numberBox.checked ||
		!signBox.checked
	) {
		securityStatusText.textContent = 'Strong';
		securityStatus.style.backgroundColor = '#08cc2f';
		icon.classList.value = '';
		if (icon.classList.value === '') {
			icon.classList.add('fas', 'fa-smile');
			securityStatus.appendChild(icon);
		}
	} else {
		securityStatusText.textContent = 'Protected';
		securityStatus.style.backgroundColor = '#0532ffe6';
		icon.classList.value = '';
		if (icon.classList.value === '') {
			icon.classList.add('fas', 'fa-grin-stars');
			securityStatus.appendChild(icon);
		}
	}
};

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

	if (!randomArr.length) {
		return '';
	}

	return randomArr[Math.floor(Math.random() * randomArr.length)];
};

const generatePassword = () => {
	let password = '';
	if (
		!upperBox.checked &&
		!lowerBox.checked &&
		!numberBox.checked &&
		!signBox.checked
	) {
		alert('You have to check at least one option box');
	}

	for (let i = password.length; i < pwLengthNumber; i++) {
		password += generateCheckedSymbol();
	}

	pwText.innerText = password;
	generateStatus();
};

const subValue = () => {
	if (pwLengthNumber <= 1) return;
	pwLengthNumber--;
	pwLength.value = pwLengthNumber;
};

const addValue = () => {
	if (pwLengthNumber >= 30) return;
	pwLengthNumber++;
	pwLength.value = pwLengthNumber;
};

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
		alert(
			`Password copied to clipboard. Your password security level is ${securityStatusText.textContent} and has ${pwLengthNumber} chars`
		);
	}
};

generatePassword();

copyBtn.addEventListener('click', copyPassword);
generateBtn.addEventListener('click', generatePassword);
subBtn.addEventListener('click', subValue);
addBtn.addEventListener('click', addValue);
pwLength.addEventListener('keyup', e => {
	pwLengthNumber = pwLength.value;
});
