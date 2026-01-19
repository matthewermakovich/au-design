import { Box, styled } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "withoutPadding",
})<{ withoutPadding?: boolean }>(({ theme, withoutPadding }) => ({
  width: "100%",
  padding: withoutPadding ? "0" : "0 80px",

  [theme.breakpoints.down("md")]: {
    padding: withoutPadding ? "0" : "0 40px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: withoutPadding ? "0" : "0 20px",
  },
}));

export const MaxWidthWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "withoutPadding",
})<{ withoutPadding?: boolean }>(({ theme, withoutPadding }) => ({
  width: "100%",
  maxWidth: withoutPadding ? "unset" : 1440,
  minHeight: "100vh",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    maxWidth: withoutPadding ? "unset" : 1280,
  },
}));
