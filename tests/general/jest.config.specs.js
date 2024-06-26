const path = require("path");
const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest");

module.exports = {
    rootDir: path.resolve(__dirname),
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: 'tests/.*\\.(spec)?\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'js'],
    "testPathIgnorePatterns": [
        "<rootDir>/(build|bin|dist|node_modules)/"
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
};