import { totalCalibrationValue } from "./index";

describe("totalCalibrationValue", () => {
  test("should return correct total sum for given input array", () => {
    expect(
      totalCalibrationValue([
        "1abc2",
        "pqr3stu8vwx",
        "treb7uchet",
        "a1b2c3d4e5f",
      ])
    ).toBe(12 + 38 + 77 + 15);
  });

  test("should handle empty array", () => {
    expect(totalCalibrationValue([])).toBe(0);
  });

  test("should handle strings with no digits", () => {
    expect(totalCalibrationValue(["abcd", "efgh", "ijkl"])).toBe(0);
  });

  test("should handle strings with single digit", () => {
    expect(totalCalibrationValue(["a1b", "c2d", "e3f"])).toBe(11 + 22 + 33);
  });

  test("should handle strings with multiple digits", () => {
    expect(totalCalibrationValue(["12ab34", "56cd78", "90ef12"])).toBe(
      14 + 58 + 92
    );
  });
});
