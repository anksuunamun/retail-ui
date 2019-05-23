import { css } from '../../../lib/theming/Emotion';
import { PlaygroundTheme } from '../__stories__/ThemeProvider.stories';

const jsStyles = {
  stickyTabsWrapper(t: PlaygroundTheme) {
    return css`
      &:after {
        box-shadow: 0 2px 10px 0px ${t.textColorMain || 'black'};
      }
    `;
  },
};

export default jsStyles;
