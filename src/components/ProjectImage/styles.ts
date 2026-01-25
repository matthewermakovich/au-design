import { Box, styled } from "@mui/material";
import ImageBase from "next/image";

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

export const Image = styled(ImageBase)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    filter: "grayscale(100%)",
    transition: "filter 0.8s ease",

    "&:hover": {
      filter: "grayscale(0%)",
    },
  },

  [theme.breakpoints.down("md")]: {
    filter: "grayscale(100%)",
    transition: "filter 0.8s ease",

    "&.visible": {
      filter: "grayscale(0%)",
    },
  },
}));
