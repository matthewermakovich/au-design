"use client";

import AOS from "aos";
import { FC, useEffect } from "react";
import "aos/dist/aos.css";

const AOSInit: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return null;
};

export default AOSInit;
