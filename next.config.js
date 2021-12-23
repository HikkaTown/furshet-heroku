module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
          @import './src/styles/__vars';
          @import './src/styles/__mixin';
      `,
  },
};
