module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.jsx'],
        alias: {
          _components: './src/components/Screens/Components',
          _utils: './src/components/Utils',
          _styles: './src/styles',
          _styles_base: './src/styles/base',
          _store: './src/store',
          _generics: './src/components/Generics',
          _types: './src/components/@types',
        },
      },
    ],
  ],
};
