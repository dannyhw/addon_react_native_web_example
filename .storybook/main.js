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
        ],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: [
        path.resolve(
          __dirname,
          '../node_modules/react-native-vector-icons/MaterialCommunityIcons.js',
        ),
        path.resolve(
          __dirname,
          '../node_modules/react-native-vector-icons/MaterialIcons.js',
        ),
      ],
    });
    return config;
  },
  framework: '@storybook/react',
};
