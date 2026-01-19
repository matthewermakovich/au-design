import { Box, styled } from "@mui/material";

export const LineBase = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 1,
  backgroundColor: theme.palette.text.secondary,
}));
