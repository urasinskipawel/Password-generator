//Variables to make password
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '123456789';
const signs = '~!@#$%^&*()_-+=';

//Get random symbols from variables
const getUpperLetter = () => upperLetters[Math.floor(Math.random() * upperLetters.length)];
const getLowerLetter = () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
const getNumber = () => numbers[Math.floor(Math.random() * numbers.length)];
const getSign = () => signs[Math.floor(Math.random() * signs.length)];

export { getUpperLetter, getLowerLetter, getNumber, getSign };
