import { extendTheme } from "@chakra-ui/react";

const customFonts = `
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Poppins:wght@400;500;600;700;800;900&family=Six+Caps&family=Syne:wght@400;500;600;700;800&display=swap");
`;

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts: {
    Syne: "Syne, sans-serif",
    SixCaps: "Six Caps, sans-serif ",
  },
});

export default theme;
