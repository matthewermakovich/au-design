import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 80,
  zIndex: 2,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const Title = styled("h1")(({ theme }) => ({
  fontFamily: "var(--font-involve)",
  fontWeight: 700,
  fontSize: 44,
  lineHeight: "58px",
  margin: 0,

  [theme.breakpoints.down("md")]: {
    fontSize: 32,
    lineHeight: "44px",
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",
  },
}));

export const Description = styled("h3")(({ theme }) => ({
  fontFamily: "var(--font-uninsta)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "24px",
  margin: 0,

  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    lineHeight: "20px",
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "14px",
  },
}));

export const ContactText = styled("a")(({ theme }) => ({
  fontFamily: "var(--font-involve)",
  fontWeight: 700,
  fontSize: 24,
  lineHeight: "32px",
  color: theme.palette.text.primary,
  textDecoration: "none",

  [theme.breakpoints.down("md")]: {
    fontSize: 20,
    lineHeight: "24px",
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: "20px",
  },
}));

export const AddressText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-involve)",
  fontWeight: 700,
  fontSize: 24,
  lineHeight: "32px",

  [theme.breakpoints.down("md")]: {
    fontSize: 20,
    lineHeight: "24px",
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: "20px",
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 48,
  flex: 0.8,
  flexShrink: 0,

  [theme.breakpoints.down("md")]: {
    flex: 1,
    width: "100%",
    maxWidth: 450,
  },

  [theme.breakpoints.down("sm")]: {
    gap: 36,
  },
}));

export const InputsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 32,

  [theme.breakpoints.down("sm")]: {
    gap: 24,
  },
}));
