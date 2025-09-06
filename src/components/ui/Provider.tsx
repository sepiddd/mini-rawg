import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const config = {
  theme: {
    tokens: {
      colors: {
        brand: {},
      },
    },
  },
};

const system = createSystem(defaultConfig, config);

export default function Provider({ children }: Props) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
