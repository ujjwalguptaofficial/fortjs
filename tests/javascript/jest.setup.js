// jest.setup.js
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// This runs automatically after EVERY single test file finishes
afterAll(async () => {
    await delay(300); // 300ms pause between test files
});
