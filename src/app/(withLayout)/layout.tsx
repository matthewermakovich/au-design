import { PropsWithChildren } from "react";

import Layout from "@/components/Layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AU Design – студия дизайна упаковки, этикеток и логотипов",
  description:
    "AU Design – студия полного цикла, создаём уникальный дизайн упаковки, этикеток и логотипов для алкогольной продукции, косметики, фармацевтики и продуктов питания. Продающий, эстетичный и профессиональный дизайн под ваш бренд.",
  openGraph: {
    title: "AU Design – студия дизайна упаковки, этикеток и логотипов",
    description:
      "AU Design создаёт уникальный дизайн упаковки, этикеток и логотипов для разных категорий товаров: алкоголь, косметика, фармацевтика, продукты питания.",
    siteName: "AU Design",
    type: "website",
  },
};

const MainLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return <Layout>{children}</Layout>;
};

export default MainLayout;
