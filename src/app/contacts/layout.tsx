import { type PropsWithChildren } from "react";

import Layout from "@/components/Layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты AU Design – студия дизайна упаковки и логотипов",
  description:
    "Свяжитесь с AU Design, чтобы обсудить создание уникального дизайна упаковки, этикеток и логотипов. Индивидуальный подход, современная эстетика и профессиональные решения для вашего бренда.",
  openGraph: {
    title: "Контакты AU Design",
    description:
      "Свяжитесь с AU Design для создания уникального дизайна упаковки, логотипов и этикеток. Профессиональные решения под ваш бренд.",
    siteName: "AU Design",
    type: "website",
  },
};

const ContactsLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return <Layout>{children}</Layout>;
};

export default ContactsLayout;
