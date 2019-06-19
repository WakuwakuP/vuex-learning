// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/resources/js/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/resources/js/**/*.{js,vue}', '!<rootDir>/resources/js/**/*.{spec,test,stories}.js'],
  coverageReporters: ['html', 'text-summary'],
};
