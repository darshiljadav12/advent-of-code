import { cubeConundrum } from "./index";
import * as fs from "fs";

jest.mock("fs");

describe("cubeConundrum", () => {
  test("should return correct sum for valid games within default limits", () => {
    const mockFileContent =
      `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n` +
      `Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n` +
      `Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n` +
      `Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n` +
      `Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

    (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);

    const expectedResult = 8;

    const result = cubeConundrum("path/to/file.txt");

    expect(result).toBe(expectedResult);
  });

  test("should handle games exceeding cube limits", () => {
    const mockFileContent =
      `Game 1: 15 red, 5 green; 3 blue\n` +
      `Game 2: 2 red, 2 green; 10 blue; 3 red\n` +
      `Game 3: 12 green, 14 blue; 20 red`;

    (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);

    const expectedResult = 2;

    const result = cubeConundrum("path/to/file.txt");

    expect(result).toBe(expectedResult);
  });

  test("should return 0 if all games are invalid", () => {
    const mockFileContent =
      `Game 1: 15 blue, 14 red; 1 green\n` + `Game 2: 20 green, 30 blue\n`;

    (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);

    const expectedResult = 0;

    const result = cubeConundrum("path/to/file.txt");

    expect(result).toBe(expectedResult);
  });

  test("should return correct sum with custom cube limits", () => {
    const mockFileContent =
      `Game 1: 9 blue, 9 red; 9 green\n` +
      `Game 2: 10 blue, 10 red; 10 green\n` +
      `Game 3: 11 blue, 11 red; 11 green\n`;

    (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);

    const expectedResult = 3;

    const result = cubeConundrum("path/to/file.txt", {
      red: 10,
      green: 10,
      blue: 10,
    });

    expect(result).toBe(expectedResult);
  });

  test("should handle edge cases with no data", () => {
    const mockFileContent = ``;

    (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);

    const expectedResult = 0;

    const result = cubeConundrum("path/to/file.txt");

    expect(result).toBe(expectedResult);
  });
});
