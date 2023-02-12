module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: [
    'src/stories'
  ],
  testPathIgnorePatterns: ['src/stories'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.svg$': '<rootDir>/__mocks__/svgTransform.js'
  },
}