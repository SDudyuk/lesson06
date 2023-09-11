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

function camelCase(str, separator) {
  let camelString = '';
  let partString = '';
  let indexSeparator;

  str = str.toLowerCase();

  while (str.includes(separator)) {
    indexSeparator = str.indexOf(separator);
    
    partString = str.slice(0, indexSeparator);
    camelString = camelString.concat(partString);

    str = str.slice(indexSeparator + 1);
    str = str.at(0).toUpperCase() + str.slice(1);
  }
  camelString = camelString.concat(str);

  return camelString;
}

console.log(`camelCase: ('Kola*sitro*kVas') => `, camelCase('Kola*sitro*kVas', '*'));