test("Example", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1");

  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: '', result: true}, "TC-2");
  assert.propEqual(convertRomanToInteger("111"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-3");
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-4");
  assert.propEqual(convertRomanToInteger("CCXLVI"), {value: 246, message: '', result: true}, "TC-5");
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-6");
  assert.propEqual(convertRomanToInteger("V"), {value: 5, message: '', result: true}, "TC-7");
  assert.propEqual(convertRomanToInteger("CMXCIX"), {value: 999, message: '', result: true}, "TC-8");
  assert.propEqual(convertRomanToInteger("ABC"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-9");

  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-10");
  assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-11");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-12");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-13");
  assert.propEqual(convertIntegerToRoman(500), {value: "D", message: '', result: true}, "TC-14");
  assert.propEqual(convertIntegerToRoman(1000), {value: "M", message: '', result: true}, "TC-15");
  assert.propEqual(convertIntegerToRoman(1234), {value: "MCCXXXIV", message: '', result: true}, "TC-16");
  assert.propEqual(convertIntegerToRoman(55), {value: "LV", message: '', result: true}, "TC-17");
});
