const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest");

module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: 'tests/.*\\.(test)?\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'js'],
    "testPathIgnorePatterns": [
        "<rootDir>/(build|bin|dist|node_modules)/"
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    globalSetup: "<rootDir>/tests/e2e.setup.js",
    globalTeardown: "<rootDir>/tests/e2e.teardown.js"
};