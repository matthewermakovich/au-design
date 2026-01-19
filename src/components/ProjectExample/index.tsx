"use client";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import Line from "@/components/Line";
import { useDevice, useVisible } from "@/hooks";

import { type ProjectExampleProps } from "./types";

import {
  Container,
  ImageWrapper,
  TitleText,
  TypeText,
  Wrapper,
} from "./styles";

const ProjectExample: FC<ProjectExampleProps> = (props) => {
  const { type, title, description, image, buttonText, buttonPath } = props;

  const { isTablet } = useDevice();

  const { ref, visible } = useVisible(0.9);

  return (
    <Container>
      <ImageWrapper ref={ref} className={`${visible ? "visible" : ""}`}>
        <Image src={image} fill alt="product-pic" objectFit="cover" />
      </ImageWrapper>
      <Wrapper className="wrapper">
        <Box
          display="flex"
          flexDirection="column"
          gap={isTablet ? 1 : 2}
          alignItems="inherit"
        >
          <TypeText
            data-aos="fade-up"
            data-aos-duration="500"
            color="primary.main"
            className="text"
          >
            {type}
          </TypeText>
          <TitleText
            data-aos="fade-up"
            data-aos-duration="500"
            className="text"
          >
            {title}
          </TitleText>
          <TypeText
            data-aos="fade-up"
            data-aos-duration="500"
            color="text.secondary"
            className="text"
          >
            {description}
          </TypeText>
        </Box>
        <Line data-aos="fade-up" data-aos-duration="500" />
        <Button
          data-aos="fade-up"
          data-aos-duration="500"
          size="large"
          href={buttonPath}
        >
          {buttonText}
        </Button>
      </Wrapper>
    </Container>
  );
};

export default ProjectExample;
