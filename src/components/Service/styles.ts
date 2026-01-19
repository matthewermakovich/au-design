import { Box, styled, Typography } from "@mui/material";
import ImageBase from "next/image";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 24,
  backgroundColor: theme.palette.background.default,
  padding: "32px 0",
  borderTop: `1px solid ${theme.palette.text.secondary}`,
}));

export const Wrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: 580,
  display: "flex",
  flexDirection: "column",
  gap: 24,
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 24,

  [theme.breakpoints.down("lg")]: {
    gap: 16,
  },

  [theme.breakpoints.down("md")]: {
    gap: 12,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-involve)",
  fontSize: 44,
  fontWeight: 700,

  [theme.breakpoints.down("md")]: {
    fontSize: 28,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-uninsta)",
  fontSize: 20,
  fontWeight: 400,
  color: theme.palette.text.secondary,

  [theme.breakpoints.down("lg")]: {
    fontSize: 20,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
}));

export const Item = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 55,
  display: "flex",
  alignItems: "center",
  gap: 16,
  borderTop: `0.5px solid ${theme.palette.text.secondary}`,
}));

export const Dot = styled(Box)(({ theme }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
}));

export const Image = styled(ImageBase)(({ theme }) => ({
  borderRadius: 20,
  objectFit: "cover",
  objectPosition: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
