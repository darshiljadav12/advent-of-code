import * as fs from "fs";
import * as path from "path";

const defaultLimits = {
  red: 12,
  green: 13,
  blue: 14,
};

export const isGameValid = (gameData: string, limits = defaultLimits) => {
  const sets = gameData.split(";").map((set) => set.trim());

  for (const set of sets) {
    const cubes = set.split(",").map((cube) => cube.trim());

    let redCubes = 0,
      greenCubes = 0,
      blueCubes = 0;

    // Parse cubes of each color from the set
    for (const cube of cubes) {
      const [countStr, color] = cube.split(" ");

      // Ensure both count and color are valid before parsing
      if (!countStr || !color || isNaN(parseInt(countStr))) {
        continue; // skip if invalid format
      }

      const count = parseInt(countStr);
      if (color === "red") redCubes += count;
      if (color === "green") greenCubes += count;
      if (color === "blue") blueCubes += count;
    }

    // Check if any set violates the max limit of cubes
    if (
      redCubes > limits.red ||
      greenCubes > limits.green ||
      blueCubes > limits.blue
    ) {
      return false;
    }
  }

  return true;
};

export const cubeConundrum = (filePath: string, limits = defaultLimits) => {
  const data = fs.readFileSync(filePath, "utf-8");
  const lines = data.trim().split("\n");
  let sumOfValidGameIDs = 0;

  for (const line of lines) {
    if (!line.trim()) continue; // skip empty lines

    const [gameIDPart, gameData] = line.split(":");
    const gameID = parseInt(gameIDPart.replace("Game ", "").trim());

    // Check if the game is valid with the given limits
    if (isGameValid(gameData, limits)) {
      sumOfValidGameIDs += gameID;
    }
  }

  return sumOfValidGameIDs;
};

// TODO: Comment below code while running test cases
// const filePath = path.join(__dirname, "./file.txt");
// console.log(cubeConundrum(filePath));
