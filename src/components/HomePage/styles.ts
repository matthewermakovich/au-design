import { Box, styled } from "@mui/material";
import ImageBase from "next/image";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 200,
  paddingBottom: 96,
  display: "flex",
  flexDirection: "column",
  gap: 96,

  [theme.breakpoints.down("lg")]: {
    paddingBottom: 80,
  },

  [theme.breakpoints.down("md")]: {
    paddingTop: 142,
    paddingBottom: 64,
    gap: 64,
  },

  [theme.breakpoints.down("sm")]: {
    paddingTop: 100,
    paddingBottom: 48,
    gap: 48,
  },
}));

export const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: 300,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 64,

  [theme.breakpoints.down("md")]: {
    height: "auto",
    flexDirection: "column-reverse",
    gap: 32,
  },

  [theme.breakpoints.down("sm")]: {
    gap: 24,
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 48,

  [theme.breakpoints.down("md")]: {
    gap: 32,
  },

  [theme.breakpoints.down("sm")]: {
    gap: 16,
  },
}));

export const Image = styled(ImageBase)(({ theme }) => ({
  borderRadius: 20,
  objectFit: "cover",
  objectPosition: "center",
  filter: "contrast(0.9)",
  flexShrink: 0,
  flexGrow: 0,

  [theme.breakpoints.down("lg")]: {
    width: 350,
    height: 262,
  },

  [theme.breakpoints.down("md")]: {
    height: "auto",
    width: "100%",
    borderRaduis: 28,
    aspectRatio: "1.5 / 1",
  },

  [theme.breakpoints.down("sm")]: {
    borderRaduis: 20,
  },
}));

export const Title = styled("span")(({ theme }) => ({
  zIndex: 2,
  fontFamily: "var(--font-involve)",
  fontWeight: 700,
  fontSize: 28,
  margin: "0",

  [theme.breakpoints.down("md")]: {
    fontSize: 20,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));

export const SubTitle = styled("span")(({ theme }) => ({
  zIndex: 2,
  fontFamily: "var(--font-uninsta)",
  fontSize: 28,
  fontWeight: 400,

  [theme.breakpoints.down("md")]: {
    fontSize: 20,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));
