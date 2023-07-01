"use client";

import { ReactQueryProvider } from "@/app/ReactQueryProvider";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Provider store={store}>{children}</Provider>
      </MantineProvider>
    </ReactQueryProvider>
  );
}
