import { Box, Typography } from "@mui/material";
import { FC } from "react";

import { useDevice } from "@/hooks";

import { ServiceProps } from "./types";

import {
  Container,
  Wrapper,
  TextContainer,
  Title,
  Description,
  Item,
  Dot,
  Image,
} from "./styles";

const Service: FC<ServiceProps> = (props) => {
  const { title, description, items, image } = props;
  const { isTablet } = useDevice();

  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
        <Box>
          {items.map((item, i) => (
            <Item key={i}>
              <Dot />
              <Typography
                fontFamily="var(--font-uninsta)"
                fontSize={isTablet ? 20 : 24}
                fontWeight={400}
              >
                {item}
              </Typography>
            </Item>
          ))}
        </Box>
      </Wrapper>
      <Image src={image} width={350} height={262} alt="service-img" />
    </Container>
  );
};

export default Service;
