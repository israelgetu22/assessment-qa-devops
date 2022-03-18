const { shuffleArray } = require("./utils");

let dummyArr = [1, 2, 3, 4];

describe("shuffleArray should", () => {
  // CODE HERE

  // test("return array", () => {
  //   expect(shuffleArray).toEqual(expect.arrayContaining(expected),
  // });

  test("returns an array of the same length as the argument", () => {
    let returnedArray = shuffleArray(dummyArr);
    expect(returnedArray.length).toEqual(dummyArr.length);
  });

  // test("all the same items are in the array", () => {
  //   expect(shuffleArray).extend(shuffleArray);
  // });

  // test("items have been shuffled around", () => {
  //   expect(shuffleArray).not.extend(shuffleArray);
  // });
});
