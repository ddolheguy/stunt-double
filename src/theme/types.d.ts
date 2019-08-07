export interface Colours {
  accept: string;
  decline: string;
  appBackground: string;
  black: string;
  white: string;
}

export interface Theme {
  colours: Colours;
}

export interface ThemeProps {
  theme: Theme;
}
