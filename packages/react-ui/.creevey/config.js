const path = require('path');

/**
 * Debuggin instructions: https://wiki.skbkontur.ru/pages/viewpage.action?pageId=418699157
 * Instructions for Windows nodes: https://git.skbkontur.ru/ke/keweb.front/-/blob/f25788b0c0fce83b762e1b51553683e4d30484bd/.creevey/readme.md#debug
 */

const debug = process.env.DEBUG_SCREENSHOTS;

const capabilities = debug
  ? {
      enableVNC: true,
      enableVideo: true,
    }
  : {};

const config = {
  storybookDir: path.join(__dirname, '../.storybook'),
  reportDir: path.join(__dirname, 'report'),
  screenDir: path.join(__dirname, 'images'),
  gridUrl: 'https://frontinfra:frontinfra@grid.testkontur.ru/wd/hub',
  storybookUrl: 'http://localhost:6060',
  // NOTE Should refactor Button styles without 1px-border
  maxRetries: process.env.TEAMCITY_VERSION ? 10 : 0,
  babelOptions: (options) => ({
    ...options,
    extends: path.join(__dirname, '../.babelrc.js'),
  }),
  diffOptions: { threshold: 0, includeAA: false },
  browsers: {
    chromeNewTheme: {
      browserName: 'chrome',
      viewport: { width: 1024, height: 720 },
      platformName: 'linux',
      _storybookGlobals: {
        theme: 'NEW_THEME',
      },
      name: 'infrafront/chromeNewTheme',
      ...capabilities,
    },
    firefoxNewTheme: {
      browserName: 'firefox',
      viewport: { width: 1024, height: 720 },
      _storybookGlobals: {
        theme: 'NEW_THEME',
      },
      name: 'infrafront/firefoxNewTheme',
      ...capabilities,
    },
    // NOTE Enable after switch new separate pool for IE to allow test hover
    // 'se:ieOptions': {
    //   enablePersistentHover: true,
    //   nativeEvents: true,
    //   requireWindowFocus: true,
    //   'ie.usePerProcessProxy': true,
    //   'ie.browserCommandLineSwitches': '-private',
    //   'ie.ensureCleanSession': true,
    // },
    // },
    ie11NewTheme: {
      browserName: 'internet explorer',
      viewport: { width: 1024, height: 720 },
      _storybookGlobals: {
        theme: 'NEW_THEME',
      },
      name: 'infrafront/ie11NewTheme',
      ...capabilities,
    },
  },
};

module.exports = config;
