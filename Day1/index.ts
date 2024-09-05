import * as fs from "fs";
import * as path from "path";

export const totalCalibrationValue = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");

  let totalSum = 0;

  lines.forEach((line) => {
    const updatedLine = line.trim();

    if (!updatedLine.length) return;

    const digits = updatedLine.replace(/\D/g, "");

    if (digits.length === 0) return;

    if (digits.length === 1) {
      totalSum += Number(digits + digits);
      return;
    }

    totalSum += Number(digits[0] + digits[digits.length - 1]);
  });

  return totalSum;
};

// TODO: Comment below code while running test cases
const filePath = path.join(__dirname, "./file.txt");
console.log(totalCalibrationValue(filePath));
