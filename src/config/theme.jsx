import { createSystem, defaultConfig, defineConfig, defineRecipe } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: "#0A8754",
        secondary: "#05603A",
        tertiary: "#033E26",
      },
      fonts: {
        heading: { value: `'Open sans', sans-serif` },
        body: { value: `'Open sans', sans-serif` },
      },
    }},
});

export const system = createSystem(defaultConfig, config);