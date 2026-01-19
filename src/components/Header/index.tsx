"use client";

import { Box, Typography } from "@mui/material";
import { Turn as Hamburger } from "hamburger-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

import BurgerMenu from "@/components/BurgerMenu";
import { ROUTES } from "@/const";
import { useDevice } from "@/hooks";

import {
  Container,
  HamburgerWrapper,
  HrefText,
  LogoContainer,
  MaxWidthWrapper,
} from "./styles";

const Header: FC = () => {
  const { isTablet } = useDevice();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById("burger-menu");
      const burgerBtn = document.getElementById("hamburger");

      if (!menu || !burgerBtn) return;

      const target = e.target as Node;

      if (!menu.contains(target) && !burgerBtn.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <>
      <Container>
        <MaxWidthWrapper>
          {!isTablet && (
            <Box display="flex" gap={2} alignItems="center">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <HrefText href="tel:+79267769296">+7 (926) 776-92-96</HrefText>
                <HrefText href="tel:+79065009226">+7 (906) 500-92-26</HrefText>
              </Box>
              <Typography
                fontFamily="var(--font-involve)"
                fontWeight={700}
                fontSize={20}
              >
                ART UNION
              </Typography>
            </Box>
          )}

          <LogoContainer href={ROUTES.HOMEPAGE}>
            <Image src="/images/logo.png" fill alt="logo" />
          </LogoContainer>

          <HamburgerWrapper id="hamburger">
            <Hamburger
              size={35}
              duration={0.35}
              toggled={isOpen}
              toggle={setIsOpen}
              label="Show menu"
            />
          </HamburgerWrapper>
        </MaxWidthWrapper>

        <BurgerMenu isOpen={isOpen} />
      </Container>
    </>
  );
};

export default Header;
