import { darken, rgba } from 'polished';

const theme = {
  colors: {
    // graytones
    chrome000: '#FFF',
    chrome100: '#FAFAFA',
    chrome200: '#C8C8C8',
    chrome300: '#AFAFAF',
    chrome400: '#969696',
    chrome500: '#7D7D7D',
    chrome600: '#646464',
    chrome700: '#4B4B4B',
    chrome800: '#323232',
    chrome900: '#191919',
    // ui colors
    background: '#FFF',
    link: '#1FB6FF',
    linkHover: darken(0.2, '#1FB6FF'),
    linkVisited: darken(0.2, '#7E5BEF'),
    overlay: rgba('#191919', 0.85),
    shadow: rgba('#646464', 0.4),
    shadowLight: rgba('#646464', 0.2),
    text: '#323232',
    textLight: '#646464',
    primary: '#7E5BEF',
    secondary: '#FFC82C',
    tertiary: '#FF49DB',
    blue: '#1FB6FF',
    green: '#13CE66',
    orange: '#FF7849',
    pink: '#FF49DB',
    purple: '#7E5BEF',
    yellow: '#FFC82C',
  },
};

export default theme;
