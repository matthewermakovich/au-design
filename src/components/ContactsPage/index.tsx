"use client";

import { Box, Button, Input, Typography } from "@mui/material";
import { FC, useState } from "react";

import SilkPlane from "@/components/SilkPlane";
import { useDevice } from "@/hooks";

import {
  ContactText,
  Container,
  Description,
  Title,
  FormContainer,
  InputsContainer,
  AddressText,
} from "./styles";

const ContactsPage: FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const { isTablet } = useDevice();

  const validate = () => {
    if (!name.trim()) return false;

    if (!phone.trim()) return false;

    if (!email.trim()) return false;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;

    return true;
  };

  const onSubmit = async () => {
    if (!validate()) {
      setStatus("error");

      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      height="100vh"
      minHeight={700}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt="100px"
    >
      <Box
        width="100%"
        height="100vh"
        minHeight={800}
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
      >
        <SilkPlane
          speed={4.5}
          scale={1}
          noiseIntensity={0.8}
          rotation={5.91}
          color="#340404"
        />
      </Box>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          gap="48px"
          flex={1}
          flexShrink={0}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="4px"
            alignItems={isTablet ? "center" : "flex-start"}
          >
            <Title>СВЯЖИТЕСЬ С НАМИ</Title>
            <Description>
              Отправить заявку или получить консультацию по дизайну упаковки и
              этикетки.
            </Description>
          </Box>

          {!isTablet && (
            <Box display="flex" flexDirection="column" gap="12px">
              <ContactText href="tel:+79267769296">
                +7 926 776-92-96
              </ContactText>
              <ContactText href="tel:+79065009226">
                +7 906 500-92-26
              </ContactText>
              <ContactText href="mailto:au_desing@mail.ru">
                au_desing@mail.ru
              </ContactText>
              <ContactText href="mailto:au_desingkost76@mail.ru">
                au_desingkost76@mail.ru
              </ContactText>
              <AddressText>
                г. Москва, Пресненская наб., д. 10 стр. 2, помещ. 5
              </AddressText>
            </Box>
          )}
        </Box>

        <FormContainer>
          <InputsContainer>
            <Input
              placeholder="ИМЯ"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="НОМЕР"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              placeholder="ПОЧТА"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputsContainer>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="center"
          >
            <Button
              size="large"
              fullWidth
              disabled={loading}
              onClick={onSubmit}
            >
              {loading ? "ОТПРАВКА..." : "ОСТАВИТЬ ЗАЯВКУ"}
            </Button>

            {status === "success" && (
              <Typography
                fontFamily="var(--font-involve)"
                fontSize={16}
                color="text.primary"
              >
                Заявка успешно отправлена
              </Typography>
            )}
            {status === "error" && (
              <Typography
                fontFamily="var(--font-involve)"
                fontSize={16}
                color="primary.main"
              >
                Не удалось отправить заявку, попробуйте позже
              </Typography>
            )}
          </Box>
        </FormContainer>
        {isTablet && (
          <Box display="flex" flexDirection="column" gap="12px">
            <ContactText href="tel:+79267769296">+7 926 776-92-96</ContactText>
            <ContactText href="tel:+79065009226">+7 906 500-92-26</ContactText>
            <ContactText href="mailto:au_desing@mail.ru">
              au_desing@mail.ru
            </ContactText>
            <ContactText href="mailto:au_desingkost76@mail.ru">
              au_desingkost76@mail.ru
            </ContactText>
            <AddressText>
              г. Москва, Пресненская наб., д. 10 стр. 2, помещ. 5
            </AddressText>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ContactsPage;
