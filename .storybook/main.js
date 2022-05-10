const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'react-native-reanimated',
          'react-native-vector-icons',
          '@react-native-community/datetimepicker',
        ],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  webpackFinal: config => {
    const vectorIconsPath = require.resolve('react-native-vector-icons');
    const toFind = 'node_modules/react-native-vector-icons/';
    const actualPath = vectorIconsPath.substring(
      0,
      vectorIconsPath.indexOf(toFind) + toFind.length,
    );
    const icons = new RegExp(`${actualPath}/.*`);
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: [icons],
    });
    return config;
  },
  framework: '@storybook/react',
};
