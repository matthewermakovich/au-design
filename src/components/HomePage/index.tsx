"use client";

import { Button } from "@mui/material";
import { FC } from "react";

import Line from "@/components/Line";
import ProjectExample from "@/components/ProjectExample";
import TextPressure from "@/components/TextPressure";
import { ROUTES } from "@/const";
import { useDevice } from "@/hooks";

import { items } from "./const";

import {
  Container,
  HeroContainer,
  Wrapper,
  Image,
  SubTitle,
  Title,
} from "./styles";

const HomePage: FC = () => {
  const { isTablet } = useDevice();

  const getFontSize = () => {
    if (isTablet) return 32;

    return 40;
  };

  return (
    <Container>
      <HeroContainer>
        <Wrapper>
          <TextPressure
            text={
              "Создаем дизайн, который вызывает\nдоверие и эмоциональную\nсвязь — узнаю и помню."
            }
            flex={false}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={false}
            textColor="#ffffff"
            minFontSize={getFontSize()}
          />
          <Button size="large" href={ROUTES.PROJECTS}>
            Проекты
          </Button>
        </Wrapper>
        <Image
          src="/images/hero-img.png"
          width={400}
          height={300}
          alt="hero-img"
        />
      </HeroContainer>

      <Line />

      <SubTitle>
        <Title>AU_Design</Title> – это студия дизайна полного цикла. Наша сила –
        не просто в создании визуально привлекательных проектов, а в глубинном
        понимании специфики каждой категории товаров:
      </SubTitle>

      {items.map((item, i) => (
        <ProjectExample
          key={i}
          type={item.type}
          title={item.title}
          description={item.description}
          buttonText={item.buttonText}
          buttonPath={item.buttonPath}
          image={item.image}
        />
      ))}
    </Container>
  );
};

export default HomePage;
