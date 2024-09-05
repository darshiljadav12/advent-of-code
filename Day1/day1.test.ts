import * as fs from "fs";
import { totalCalibrationValue } from "./index";

jest.mock("fs");

describe("totalCalibrationValue", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should calculate the total calibration value correctly", () => {
    const mockFileContent = `gtbhbjgkrb5sixfivefivetwosix\nfivennhhdfpmrnpjhdm2sixkrsgdt`;

    (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);

    const expectedResult = 55 + 22;

    const result = totalCalibrationValue("path/to/file.txt");

    expect(result).toBe(expectedResult);
  });

  test("should handle an empty file", () => {
    (fs.readFileSync as jest.Mock).mockReturnValue("");

    const expectedResult = 0;

    const result = totalCalibrationValue("path/to/file.txt");

    expect(result).toBe(expectedResult);
  });

  test("should handle a file with no numbers", () => {
    (fs.readFileSync as jest.Mock).mockReturnValue("abcd\nxyz\n");

    const expectedResult = 0;

    const result = totalCalibrationValue("path/to/file.txt");

    expect(result).toBe(expectedResult);
  });

  test("should handle a file with single-digit numbers", () => {
    (fs.readFileSync as jest.Mock).mockReturnValue("1\n2\n3\n");

    const expectedResult = 11 + 22 + 33;

    const result = totalCalibrationValue("path/to/file.txt");

    expect(result).toBe(expectedResult);
  });
});
