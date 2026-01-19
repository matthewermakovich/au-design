import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "../../public/fonts/Manrope/Manrope-VariableFont_wght.ttf",
      weight: "200 800",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const involve = localFont({
  src: [
    { path: "../../public/fonts/Involve/Involve-Regular.ttf", weight: "400" },

    { path: "../../public/fonts/Involve/Involve-Medium.ttf", weight: "500" },
    {
      path: "../../public/fonts/Involve/Involve-MediumOblique.ttf",
      weight: "500",
      style: "italic",
    },

    { path: "../../public/fonts/Involve/Involve-SemiBold.ttf", weight: "600" },
    {
      path: "../../public/fonts/Involve/Involve-SemiBoldOblique.ttf",
      weight: "600",
      style: "italic",
    },

    { path: "../../public/fonts/Involve/Involve-Bold.ttf", weight: "700" },
    {
      path: "../../public/fonts/Involve/Involve-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },

    {
      path: "../../public/fonts/Involve/Involve-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-involve",
});

export const unista = localFont({
  src: [
    { path: "../../public/fonts/Uninsta/Uninsta-Light.ttf", weight: "300" },
    {
      path: "../../public/fonts/Uninsta/Uninsta-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },

    { path: "../../public/fonts/Uninsta/Uninsta-Normal.ttf", weight: "400" },
    {
      path: "../../public/fonts/Uninsta/Uninsta-NormalItalic.ttf",
      weight: "400",
      style: "italic",
    },

    { path: "../../public/fonts/Uninsta/Uninsta-Medium.ttf", weight: "500" },
    {
      path: "../../public/fonts/Uninsta/Uninsta-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },

    { path: "../../public/fonts/Uninsta/Uninsta-DemiBold.ttf", weight: "600" },
    {
      path: "../../public/fonts/Uninsta/Uninsta-DemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },

    { path: "../../public/fonts/Uninsta/Uninsta-Bold.ttf", weight: "700" },
    {
      path: "../../public/fonts/Uninsta/Uninsta-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },

    { path: "../../public/fonts/Uninsta/Uninsta-ExtraBold.ttf", weight: "800" },
    {
      path: "../../public/fonts/Uninsta/Uninsta-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },

    { path: "../../public/fonts/Uninsta/Uninsta-Heavy.ttf", weight: "900" },
    {
      path: "../../public/fonts/Uninsta/Uninsta-HeavyItalic.ttf",
      weight: "900",
      style: "italic",
    },

    { path: "../../public/fonts/Uninsta/Uninsta-Black.ttf", weight: "950" },
    {
      path: "../../public/fonts/Uninsta/Uninsta-BlackItalic.ttf",
      weight: "950",
      style: "italic",
    },

    { path: "../../public/fonts/Uninsta/Uninsta.ttf", weight: "400" },
  ],
  variable: "--font-unista",
});
