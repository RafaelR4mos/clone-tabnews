const dotenv = require("dotenv")
dotenv.config({
  path: ".env.development"
})

const nextJest = require("next/jest")

const createJestConfig = nextJest();
const projectDir = ["node_modules", "<rootDir>"]
const jestConfig = createJestConfig({
  moduleDirectories: projectDir,
})

module.exports = jestConfig;