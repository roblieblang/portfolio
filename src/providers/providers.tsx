"use client";
import {ThemeProvider} from "./themeProvider";

export default function Providers({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
