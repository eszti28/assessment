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

  if (n > 19) {
    word += twoDigit[parseInt(n / 10)] + '-' + oneDigit[n % 10];
  } else {
    word += oneDigit[n];
  }

  if (n !== 0) {
    word += s;
  }

  return word;
}
