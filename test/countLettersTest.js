const assert = require('chai').assert;
const countLetters = require('../countLetters');




describe("#countLetters", () => {
  it("returns the count ({ 'l': 1, 'i': 2, 'g': 1, 'h': 4, 't': 2, 'o': 2, 'u': 2, 's': 2, 'e': 3, 'n': 1 }) for the letter", () => {
    const expect = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

    assert.deepEqual(countLetters("lighthouse in the house"), expect);

  });
});

//console.log(countLetters("lighthouse in the house"));
//, { 'l': 1, 'i': 2, 'g': 1, 'h': 4, 't': 2, 'o': 2, 'u': 2, 's': 2, 'e': 3, 'n': 1 }
