import { create } from '@storybook/theming';

export default create({
<<<<<<< HEAD
  base: 'light',
  brandTitle: 'Protocols UI Kit',
  brandUrl: 'https://kiva.org',
  brandImage: '/img/logo.svg',
=======
  base: 'dark',

  // UI
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Protocol Web UI Kit',
  brandUrl: 'https://kiva.org',
  brandImage: 'https://kiva.org/logo.svg',
>>>>>>> 5fbac97 (Ready to create NPM package)
});
