const oneDigit = [
  '',
  'one ',
  'two ',
  'three ',
  'four ',
  'five ',
  'six ',
  'seven ',
  'eight ',
  'nine ',
  'ten ',
  'eleven ',
  'twelve ',
  'thirteen ',
  'fourteen ',
  'fifteen ',
  'sixteen ',
  'seventeen ',
  'eighteen ',
  'nineteen ',
];

const twoDigit = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

function twoDigitConversion(n, s) {
  let word = '';

  if (n > 19 && n % 10 === 0) {
    word += twoDigit[parseInt(n / 10)];
  } else if (n > 19 && n % 10 !== 0) {
    word += twoDigit[parseInt(n / 10)] + '-' + oneDigit[n % 10];
  } else {
    word += oneDigit[n];
  }

  if (n !== 0) {
    word += s;
  }

  return word;
}

function convertToWords(n) {
  let output = '';

  output += twoDigitConversion(parseInt(n / 1000000), 'million ');

  if (n?.substring(1, 3) === '00' || n?.substring(2, 4) == '00') {
    output += twoDigitConversion(
      parseInt((n / 100000) % 10),
      'hundred thousand '
    );
  } else {
    output += twoDigitConversion(parseInt((n / 100000) % 10), 'hundred ');
  }

  output += twoDigitConversion(parseInt((n / 1000) % 100), 'thousand ');

  output += twoDigitConversion(parseInt((n / 100) % 10), 'hundred ');

  if (n > 100 && n % 100 > 0) {
    output += 'and ';
  }

  output += twoDigitConversion(parseInt(n % 100), '');

  return output;
}

module.exports = convertToWords;
