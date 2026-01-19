import { createTheme } from "@mui/material/styles";

import buttonConfig from "./buttons";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#F00238",
    },

    secondary: {
      main: "#FFF",
    },

    text: {
      primary: "#FFF",
      secondary: "#8E8E8E",
    },

    background: {
      default: "#000000",
    },
  },

  typography: {
    fontFamily: "var(--font-unista)",

    h1: { fontFamily: "var(--font-manrope)", fontWeight: 700 },
    h2: { fontFamily: "var(--font-manrope)", fontWeight: 600 },

    subtitle1: { fontFamily: "var(--font-involve)", fontWeight: 500 },
    subtitle2: { fontFamily: "var(--font-involve)", fontWeight: 400 },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

// @ts-expect-error: the specifics of passing the theme to components
theme.components = {
  ...buttonConfig(theme),
};

export { theme };
