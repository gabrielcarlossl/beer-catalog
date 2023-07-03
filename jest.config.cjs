module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
}
