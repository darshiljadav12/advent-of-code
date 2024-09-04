export const totalCalibrationValue = (e: string[]) => {
  let totalSum = 0;

  e.forEach((s) => {
    const digits = s.replace(/\D/g, "");

    if (digits.length === 0) return;

    if (digits.length === 1) {
      totalSum += Number(digits + digits);
      return;
    }

    totalSum += Number(digits[0] + digits[digits.length - 1]);
  });

  return totalSum;
};

console.log(
  totalCalibrationValue(["1abc2", "pqr3stu8vwx", "treb7uchet", "a1b2c3d4e5f"])
);
