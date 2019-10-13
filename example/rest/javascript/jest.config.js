module.exports = {
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    testEnvironment: 'node',
    testRegex: '.*\\.(test|spec)?\\.(ts|tsx|js)$',
    "testPathIgnorePatterns": [
        "<rootDir>/(build|bin|dist|node_modules)/"
    ],
    moduleFileExtensions: ['ts', 'js'],

};