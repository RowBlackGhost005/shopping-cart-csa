module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/src/setupTests.js'],
  globals: {
    Uint8Array: Uint8Array,
  },
  transform: {
    '^.+.[tj]sx?$': [
      'babel-jest',
    ],
  },
};