#create the build file
npm run buildpack

# Run random folder test

cd tests/random
npm install
ls
npm run install:build:test

#run file test
cd ..
cd filetest
ls
npm run install:build:test
