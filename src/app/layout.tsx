import { PropsWithChildren } from "react";

import AOSInit from "@/components/AOSInit";
import ThemeProvider from "@/lib/materialUI";

import { manrope, involve, unista } from "./fonts";

const RootLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${involve.variable} ${unista.variable}`}
    >
      <body>
        <ThemeProvider>
          <AOSInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
