"use client";

import { FC } from "react";

import { navItems } from "@/const";

import { type BurgerMenuProps } from "./types";

import { Layer1, Layer2, MainContainer, Text, Link } from "./styles";

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen }) => {
  return (
    <>
      <Layer1 isOpen={isOpen} />
      <Layer2 isOpen={isOpen} />
      <MainContainer id="burger-menu" isOpen={isOpen}>
        {isOpen &&
          navItems.map((item, index) => (
            <Link
              key={isOpen ? `${index} open` : `${index} closed`}
              href={item.href}
            >
              <Text
                text={item.label}
                ease="elastic.out(1, 0.7)"
                splitType="words"
                duration={1}
                delay={70}
                startDelay={index * 0.2}
              />
            </Link>
          ))}
      </MainContainer>
    </>
  );
};

export default BurgerMenu;
