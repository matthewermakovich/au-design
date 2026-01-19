import { type PropsWithChildren } from "react";

import Layout from "@/components/Layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наши проекты – AU Design",
  description:
    "Посмотрите портфолио AU Design: реализованные проекты по разработке упаковки, этикеток и логотипов для различных категорий товаров. Мы создаём дизайн, который вызывает доверие и эмоциональную связь с продуктом.",
  openGraph: {
    title: "Наши проекты – AU Design",
    description:
      "Портфолио AU Design: этикетки, упаковка, логотипы. Продающий и эстетичный дизайн для вашего бренда.",
    siteName: "AU Design",
    type: "website",
  },
};

const ProjectsLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return <Layout withoutPadding>{children}</Layout>;
};

export default ProjectsLayout;
