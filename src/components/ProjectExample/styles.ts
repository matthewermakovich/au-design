import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: 12,
  gap: 48,

  [theme.breakpoints.down("lg")]: {
    gap: 32,
  },

  [theme.breakpoints.up("sm")]: {
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",

      "& .wrapper": {
        alignItems: "flex-end",
      },

      "& .text": {
        textAlign: "right",
      },
    },
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 24,
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: 1,
  aspectRatio: "1 / 1",
  borderRadius: 32,
  overflow: "hidden",
  filter: "grayscale(100%)",
  transition: "filter 0.8s ease",

  "&.visible": {
    filter: "grayscale(0%)",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    aspectRatio: "1.3 / 1",
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 32,

  [theme.breakpoints.down("md")]: {
    gap: 16,
  },
}));

export const TypeText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-unista)",
  fontWeight: 400,
  fontSize: 20,

  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-involve)",
  fontWeight: 700,
  fontSize: 44,

  [theme.breakpoints.down("md")]: {
    fontSize: 32,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
  },
}));
