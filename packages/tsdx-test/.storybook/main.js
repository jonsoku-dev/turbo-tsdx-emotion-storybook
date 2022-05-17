const path = require('path')

function getPackageDir(package) {
  return path.dirname(require.resolve(path.join(package, 'package.json')))
}


module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: { reactDocgen: false },
  webpackFinal: async (config, { configType }) => {
    // Fixes npm packages that depend on some modules
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': getPackageDir('@emotion/react'),
      '@emotion/styled': getPackageDir('@emotion/styled'),
      'emotion-theming': getPackageDir('@emotion/react'),
      // '~': path.resolve(__dirname, '../src/'),
    }

    // Important: return the modified config
    return config
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   // reactDocgenTypescriptOptions: {
  //   //   shouldExtractLiteralValuesFromEnum: true,
  //   //   propFilter: (prop) => {
  //   //     console.log(prop.parent?.fileName, "hey")
  //   //     return (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
  //   //   },
  //   // },
  // }
};
