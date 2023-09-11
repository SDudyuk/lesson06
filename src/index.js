function doubleLetter(inputString) {
  let result = '';
  for (let i=0; i<inputString.length; i++) {
    result = result.concat(inputString.at(i).repeat(2));
  }
  return result;
}

console.log('doubleLetter: ', 'hello => ', doubleLetter('kyky'));

function padString(str, length, symbol, toLeft) {
  return toLeft != undefined ? str.padStart(length, symbol) : str.padEnd(length, symbol);
}

console.log('padString: ', "padString('Ivan', 6, '*') => ", padString('Ivan', 6, '*'));
console.log('padString: ', "padString('Ivan', 6, '*', 'toLeft') => ", padString('Ivan', 6, '*', 'toLeft'));