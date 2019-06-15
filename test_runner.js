const { execSync } = require('child_process');

const testCommand = `npm run install:build:test`;
execSync(`cd tests/general && ${testCommand}`, {
    stdio: 'inherit'
});
execSync(`cd tests/filetest && ${testCommand}`, {
    stdio: 'inherit'
});
