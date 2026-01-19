"use client";

import { FC } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { LayoutProps } from "./typings";

import { Container, MaxWidthWrapper } from "./styles";

const Layout: FC<LayoutProps> = (props) => {
  const { children, withoutPadding } = props;

  return (
    <Container withoutPadding={withoutPadding}>
      <Header />
      <MaxWidthWrapper withoutPadding={withoutPadding}>
        {children}
        <Footer />
      </MaxWidthWrapper>
    </Container>
  );
};

export default Layout;
