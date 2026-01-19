import { Box, styled, Typography } from "@mui/material";
import ImageBase from "next/image";

export const Container = styled(Box)(() => ({
  width: "100%",
}));

export const ServicesContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 115,
  display: "flex",
  flexDirection: "column",
  gap: 32,

  [theme.breakpoints.down("md")]: {
    paddingTop: 92,
  },

  [theme.breakpoints.down("sm")]: {
    paddingTop: 74,
  },
}));

export const ServicesTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-involve)",
  fontSize: 44,
  fontWeight: 700,

  [theme.breakpoints.down("md")]: {
    fontSize: 32,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
  },
}));

export const MarqueeContainer = styled(Box)(({ theme }) => ({
  width: "100dvw",
  position: "relative",
  left: "calc(50% - 50dvw)",
  display: "flex",
  padding: "64px 0",
  gap: 20,
  overflow: "hidden",
  alignItems: "center",

  "& .marquee-track": {
    display: "flex",
    gap: 24,
    animation: "marquee 25s linear infinite",
  },

  "@keyframes marquee": {
    "0%": { transform: "translateX(-50%)" },
    "100%": { transform: "translateX(0)" },
  },

  [theme.breakpoints.down("md")]: {
    gap: 12,
  },

  [theme.breakpoints.down("sm")]: {
    gap: 8,
  },
}));

export const Image = styled(ImageBase)(({ theme }) => ({
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: 12,
  opacity: 0.7,
  flexShrink: 0,

  [theme.breakpoints.down("md")]: {
    width: 171,
    height: 130,
  },

  [theme.breakpoints.down("sm")]: {
    width: 132,
    height: 100,
  },
}));
