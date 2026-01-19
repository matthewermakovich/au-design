import { Theme } from "@mui/material";

const buttonConfig = (theme: Theme) => ({
  MuiButton: {
    defaultProps: {
      variant: "outlined",
    },

    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        borderRadius: 48,
        textTransform: "none",
        border: `1px solid ${theme.palette.secondary.main}`,
        fontFamily: "var(--font-unista)",
        fontWeight: 400,
        transition: "background-color 0.25s ease, color 0.25s ease",

        "&:hover": {
          color: theme.palette.background.default,
          backgroundColor: theme.palette.text.primary,
        },
      },

      sizeLarge: {
        padding: "16px 48px",
        fontSize: 20,
        lineHeight: "22px",
      },

      sizeSmall: {
        padding: "12px 36px",
        fontSize: 16,
        lineHeight: "18px",
      },
    },
  },
});

export default buttonConfig;
