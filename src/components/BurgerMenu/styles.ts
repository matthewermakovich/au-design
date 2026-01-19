import { Box, styled } from "@mui/material";
import LinkBase from "next/link";

import SplitText from "@/components/SplitText";

export const Layer1 = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: "fixed",
  top: 0,
  height: "100vh",
  width: "40%",
  transition: "right 0.3s ease-out",
  zIndex: 11,

  right: isOpen ? 0 : "-40%",
  backgroundColor: theme.palette.secondary.main,
  transitionDelay: isOpen ? "0ms" : "150ms",

  [theme.breakpoints.down("md")]: {
    width: "80%",
    right: isOpen ? 0 : "-80%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    right: isOpen ? 0 : "-100%",
  },
}));

export const Layer2 = styled(Layer1)(({ theme, isOpen }) => ({
  backgroundColor: theme.palette.primary.main,
  transitionDelay: isOpen ? "100ms" : "100ms",
}));

export const MainContainer = styled(Layer1)(({ theme, isOpen }) => ({
  backgroundColor: theme.palette.background.default,
  transitionDelay: isOpen ? "150ms" : "0ms",
  zIndex: 13,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 24,
  padding: 60,
}));

export const Text = styled(SplitText)({
  fontFamily: "var(--font-involve)",
  fontWeight: 700,
  fontSize: 28,
});

export const Link = styled(LinkBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  transition: "color 0.25s ease",

  "&:hover": {
    color: theme.palette.text.secondary,
  },
}));
