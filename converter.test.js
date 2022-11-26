const { convertToWords } = require('./app');

describe('number converter', () => {
  it('should convert numbers to words', () => {
    const numbers = [
      '7',
      '42',
      '1999',
      '2001',
      '17999',
      '100001',
      '342251',
      '1300420',
    ];
    const words = [
      'seven',
      'forty-two',
      'one thousand nine hundred and ninety-nine',
      'two thousand and one',
      'seventeen thousand nine hundred and ninety-nine',
      'one hundred thousand and one',
      'three hundred and forty-two thousand two hundred and fifty-one',
      'one million three hundred thousand four hundred and twenty',
    ];
    expect(convertToWords(numbers[0])).toEqual(words[0]);
    expect(convertToWords(numbers[0])).toEqual(words[1]);
    expect(convertToWords(numbers[0])).toEqual(words[2]);
    expect(convertToWords(numbers[0])).toEqual(words[3]);
    expect(convertToWords(numbers[0])).toEqual(words[4]);
    expect(convertToWords(numbers[0])).toEqual(words[5]);
    expect(convertToWords(numbers[0])).toEqual(words[6]);
    expect(convertToWords(numbers[0])).toEqual(words[7]);
  });
});
