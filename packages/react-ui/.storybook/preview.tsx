import React from 'react';
import { setFilter } from '@skbkontur/react-props2attrs';
import { findAmongParents } from '@skbkontur/react-sorge/lib';
import { Meta } from '@storybook/react';
import { isTestEnv } from '../lib/currentEnvironment';
import { ThemeContext } from '../lib/theming/ThemeContext';

import { DEFAULT_THEME } from '../lib/theming/themes/DefaultTheme';
import { DARK_THEME } from '../lib/theming/themes/DarkTheme';
import { DEFAULT_THEME_8PX_OLD } from '../lib/theming/themes/DefaultTheme8pxOld';
import { FLAT_THEME_8PX_OLD } from '../lib/theming/themes/FlatTheme8pxOld';

const themes = { DEFAULT_THEME, DARK_THEME, DEFAULT_THEME_8PX_OLD, FLAT_THEME_8PX_OLD };

setFilter((fiber) => {
  // Транслируем все пропы только для контролов
  const isControlComponent = !!findAmongParents(
    fiber,
    (fiberParent) => fiberParent.type && typeof fiberParent.type.__KONTUR_REACT_UI__ === 'string',
  );
  if (isTestEnv && isControlComponent) {
    return null;
  }
  // Для остальных компонентов ограничиваемся тестовыми идентификаторами
  return ['data-tid', 'data-testid'];
});

export const decorators: Meta['decorators'] = [
  (Story, context) => {
    const theme = themes[context.globals.theme] || DEFAULT_THEME;
    if (theme !== DEFAULT_THEME) {
      return (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            background: theme.bgDefault,
            color: theme === DARK_THEME ? theme.textColorDefault : 'inherit',
          }}
        >
          <ThemeContext.Provider value={theme}>
            <Story />
          </ThemeContext.Provider>
        </div>
      );
    }
    return <Story />;
  },
  (Story) => (
    <div id="test-element" style={{ display: 'inline-block', padding: 4 }}>
      <Story />
    </div>
  ),
];

export const parameters: Meta['parameters'] = {
  creevey: {
    captureElement: '#test-element',
  },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'React UI Theme',
    defaultValue: 'DEFAULT_THEME',
    toolbar: {
      icon: 'paintbrush',
      items: Object.keys(themes),
      showName: true,
    },
  },
};

if (isTestEnv) {
  import('../lib/styles/HoldSelectionColor');
}
