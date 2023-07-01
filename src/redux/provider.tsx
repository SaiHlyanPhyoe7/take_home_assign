"use client";

import { ReactQueryProvider } from "@/app/ReactQueryProvider";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./store";
import { childT } from "@/type";

export function Providers({ children }: childT) {
  return (
    <ReactQueryProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Provider store={store}>{children}</Provider>
      </MantineProvider>
    </ReactQueryProvider>
  );
}
