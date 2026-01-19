import { Box, styled } from "@mui/material";
import Link from "next/link";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 115,
  position: "fixed",
  zIndex: 10,
  top: 0,
  left: 0,
  padding: "20px 80px",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(0, 0, 0, 0.3)",

  [theme.breakpoints.down("md")]: {
    padding: "16px 40px",
    height: 92,
  },

  [theme.breakpoints.down("sm")]: {
    padding: "12px 20px",
    height: 74,
  },
}));

export const MaxWidthWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 1440,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

  [theme.breakpoints.down("lg")]: {
    maxWidth: 1280,
  },
}));

export const HrefText = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  transition: "color 0.25s ease",

  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

export const LogoContainer = styled(Link)(({ theme }) => ({
  position: "relative",
  width: 102,
  height: 75,

  [theme.breakpoints.up("md")]: {
    position: "absolute",
    left: "50%",
  },

  [theme.breakpoints.down("md")]: {
    width: 81,
    height: 60,
  },

  [theme.breakpoints.down("sm")]: {
    width: 68,
    height: 50,
  },
}));

export const HamburgerWrapper = styled(Box)({
  zIndex: 14,
});
