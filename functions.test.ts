const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE

  test("return array", () => {
    expect(shuffleArray).toEqual(expect.arrayContaining(expected),
  });

  test("returns an array of the same length as the argument", () => {
    let argument = shuffleArray();
    expect(shuffleArray.length).toEqual(argument.length);
  });

  test("all the same items are in the array", () => {
    expect(shuffleArray).extend(shuffleArray);
  });

  test("items have been shuffled around", () => {
    expect(shuffleArray).not.extend(shuffleArray);
  });
});
