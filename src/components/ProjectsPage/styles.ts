import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 1440,
  margin: "0 auto",
  position: "relative",
  paddingTop: 115,

  [theme.breakpoints.down("md")]: {
    paddingTop: 92,
  },

  [theme.breakpoints.down("sm")]: {
    paddingTop: 74,
  },
}));

export const Grid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
}));

export const GridItem = styled(Box)<{ $wide?: boolean }>(({ $wide }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  overflow: "hidden",

  "& img": {
    objectFit: "cover",
  },

  ...($wide && {
    gridColumn: "span 3",
    aspectRatio: "3 / 1",
  }),
}));

export const LoaderOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
});

export const Spinner = styled(Box)({
  width: 24,
  height: 24,
  border: "3px solid rgba(255, 255, 255, 0.2)",
  borderTopColor: "rgba(255, 255, 255, 0.7)",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",

  "@keyframes spin": {
    to: { transform: "rotate(360deg)" },
  },
});
