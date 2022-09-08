// Take DOM elements
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
const securityStatusText = document.querySelector('.generator-security-status p');

export { pwText, copyBtn, generateBtn, subBtn, addBtn, pwLength, upperBox, lowerBox, numberBox, signBox, securityStatus, securityStatusText };
