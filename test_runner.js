const { execSync } = require('child_process');

const testCommand = `npm run install:build:test`;
const testCommandForProd = `cross-env NODE_ENV=production ` + testCommand;
const testCommandForDev = `cross-env NODE_ENV=development ` + testCommand;

// run in development
execSync(`cd tests/general && ${testCommandForDev}`, {
    stdio: 'inherit'
});

execSync(`cd tests/filetest && ${testCommandForDev}`, {
    stdio: 'inherit'
});


// run in prod
execSync(`cd tests/general && ${testCommandForProd}`, {
    stdio: 'inherit'
});

execSync(`cd tests/filetest && ${testCommandForProd}`, {
    stdio: 'inherit'
});
