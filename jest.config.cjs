module.exports = {
    testEnvironment: 'jsdom',
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
    collectCoverage: true,
    setupFilesAfterEnv: ['@testing-library/jest-dom/']
};