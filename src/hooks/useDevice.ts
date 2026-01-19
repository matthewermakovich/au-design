"use client";

import { useMediaQuery, Theme } from "@mui/material";

export const useDevice = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm"),
  );
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md"),
  );
  const isSmallDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg"),
  );
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return { isMobile, isTablet, isSmallDesktop, isDesktop };
};
