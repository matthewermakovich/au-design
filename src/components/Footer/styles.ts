import { Box, styled } from "@mui/material";
import LinkBase from "next/link";

export const Container = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 48,
  padding: "48px 0",
});

export const LogoContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: 205,
  height: 75,

  [theme.breakpoints.down("md")]: {
    width: 154,
    height: 56,
  },

  [theme.breakpoints.down("sm")]: {
    width: 115,
    height: 42,
  },
}));

export const ContactsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 1000,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 32,

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

export const ContactWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 22,
  flexShrink: 0,

  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));

export const Link = styled(LinkBase)(({ theme }) => ({
  fontFamily: "var(--font-involve)",
  fontWeight: 700,
  fontSize: 16,
  textDecoration: "none",
  color: theme.palette.text.primary,
  transition: "color 0.25s ease",

  "&:hover": {
    color: theme.palette.text.secondary,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

export const HrefText = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: "flex",
  gap: 12,

  "&:hover": {
    color: theme.palette.text.primary,

    "& .icon": {
      backgroundColor: theme.palette.text.primary,
    },
  },
}));

export const Icon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "src",
})<{ src: string }>(({ theme, src }) => ({
  width: 21,
  height: 21,
  maskImage: `url(${src})`,
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  backgroundColor: theme.palette.text.secondary,
  transition: "background-color 0.25s ease",
}));
