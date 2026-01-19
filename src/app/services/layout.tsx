import { PropsWithChildren } from "react";

import Layout from "@/components/Layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги – AU Design: дизайн этикеток, упаковки и логотипов",
  description:
    "AU Design предлагает полный цикл услуг: создание продающих этикеток, индивидуальных логотипов и упаковки с учётом специфики продукта и законодательства. Инновационные решения, экофокус и внимание к каждой детали.",
  openGraph: {
    title: "Услуги – AU Design",
    description:
      "Создание этикеток, логотипов и упаковки для различных категорий товаров с индивидуальным подходом.",
    siteName: "AU Design",
    type: "website",
  },
};

const ServicesLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return <Layout>{children}</Layout>;
};

export default ServicesLayout;
