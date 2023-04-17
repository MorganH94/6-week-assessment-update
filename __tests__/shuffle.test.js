const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
    test("returns an array", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = shuffle(arr);
      expect(Array.isArray(result)).toBe(true);
    });
  
    test("returns an array of the same length as the argument", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = shuffle(arr);
      expect(result.length).toBe(arr.length);
    });
  });
