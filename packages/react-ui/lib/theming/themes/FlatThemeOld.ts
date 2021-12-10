import { ThemeFactory } from '../ThemeFactory';
import { markAsFlatTheme } from '../ThemeHelpers';
import { OldColorsThemeInternal } from '../../../internal/themes/OldColors';
import { Not8pxThemeInternal } from '../../../internal/themes/Not8pxTheme';

export const FLAT_THEME_OLD = ThemeFactory.create(
  {
    ...Not8pxThemeInternal,
    radioSize: '18px',
    radioSizeAfter: '20px',
    radioVerticalAlign: 'top',
    btnFontSizeMedium: '16px',
  },
  markAsFlatTheme(OldColorsThemeInternal),
);
