const { isSet } = require("./utils");

describe("isSet", () => {
  it("should be false to null", () => {
    expect(isSet(null)).toBe(false);
  });
});
