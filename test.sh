#create the build file
npm run buildpack

# Run general folder test

cd tests/general
npm install
ls
npm run install:build:test

#run file test
cd ..
cd filetest
ls
npm run install:build:test
