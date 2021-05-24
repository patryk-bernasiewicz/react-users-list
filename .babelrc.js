module.exports = {
  plugins: ['babel-plugin-styled-components'],
  env: {
    production: {
      plugins: [
        ['react-remove-properties', { properties: ['data-cy'] }],
      ],
    },
  },
};
