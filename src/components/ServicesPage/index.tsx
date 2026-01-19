"use client";

import { Box } from "@mui/material";
import { FC } from "react";

import Service from "@/components/Service";

import ScrollStack, { ScrollStackItem } from "../ScrollStack";

import { marqueeImages, services } from "./const";

import {
  MarqueeContainer,
  ServicesContainer,
  ServicesTitle,
  Image,
} from "./styles";

const ServicesPage: FC = () => {
  return (
    <ServicesContainer>
      <MarqueeContainer>
        <Box className="marquee-track">
          {[...marqueeImages, ...marqueeImages].map((image, i) => (
            <Image key={i} src={image} width={233} height={177} alt="image" />
          ))}
        </Box>
      </MarqueeContainer>
      <ServicesTitle>НАШИ УСЛУГИ</ServicesTitle>
      <ScrollStack>
        {services.map((service, i) => (
          <ScrollStackItem key={i}>
            <Service
              title={service.title}
              description={service.description}
              items={service.items}
              image={service.image}
            />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </ServicesContainer>
  );
};

export default ServicesPage;
