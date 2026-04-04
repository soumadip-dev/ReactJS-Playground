import { compose } from 'redux';

function removeSpaces(string) {
  return string.split(' ').join('');
}

function repeatString(string, number) {
  return string.repeat(number);
}

function convertToUpperCase(string) {
  return string.toUpperCase();
}

const input = 'abc abc';

const repeat3Times = str => repeatString(str, 3);

// const output = convertToUpperCase(repeatString(removeSpaces(input), 3));

const composedFuncion = compose(removeSpaces, repeat3Times, convertToUpperCase);

console.log(composedFuncion(input));
