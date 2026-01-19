"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import Line from "@/components/Line";
import { navItems, INSTAGRAM_LINK, VK_LINK } from "@/const";
import { useDevice } from "@/hooks";

import {
  ContactsContainer,
  ContactWrapper,
  Container,
  HrefText,
  Icon,
  Link,
  LogoContainer,
} from "./styles";

const Footer: FC = () => {
  const { isMobile } = useDevice();

  return (
    <Container>
      <LogoContainer>
        <Image src="/images/big-logo.png" fill alt="big-logo" />
      </LogoContainer>
      <Box width="100%" display="flex" flexDirection="column" gap={4}>
        <Box
          width="80%"
          maxWidth={1140}
          display="flex"
          justifyContent={isMobile ? "center" : "space-between"}
          margin="0 auto"
          gap={3}
          flexWrap="wrap"
        >
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ))}
        </Box>
        <Line />
        <ContactsContainer>
          <ContactWrapper>
            <HrefText href="tel:+79267769296">+7 (926) 776-92-96</HrefText>
            <HrefText href="tel:+79065009226">+7 (906) 500-92-26</HrefText>
          </ContactWrapper>

          <ContactWrapper>
            <HrefText href="mailto:au_desing@mail.ru">
              au_desing@mail.ru
            </HrefText>
            <HrefText href="mailto:au_desingkost76@mail.ru">
              au_desingkost76@mail.ru
            </HrefText>
          </ContactWrapper>

          <ContactWrapper>
            <HrefText href={VK_LINK}>
              <Icon src="/icons/vk.svg" className="icon" />
              Мы в VK
            </HrefText>
            <HrefText href={INSTAGRAM_LINK}>
              <Icon src="/icons/instagram.svg" className="icon" />
              Мы в Instagram
            </HrefText>
          </ContactWrapper>

          <Typography
            fontFamily="var(--font-involve)"
            fontWeight={700}
            fontSize={isMobile ? 12 : 16}
            maxWidth={250}
            color="text.secondary"
            textAlign={isMobile ? "center" : "left"}
          >
            123112, г. Москва, Пресненская наб., д. 10 стр. 2, помещ. 5
          </Typography>
        </ContactsContainer>
      </Box>
    </Container>
  );
};

export default Footer;
