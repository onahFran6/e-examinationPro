"use client";

import * as React from "react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { Options as OptionsOfCreateCache } from "@emotion/cache";
import { useModeContext } from "./context";
import { PaletteOptions } from "@mui/material/styles/createPalette";

// Define a custom type for the extended palette
interface ExtendedPalette extends ThemeOptions {
  hoveredBg: string;
}

// ----------------------------------------------------------------------

type Props = {
  options: Omit<OptionsOfCreateCache, "insertionPoint">;
  children: React.ReactNode;
};

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: Props) {
  const { options, children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  const { mode } = useModeContext();

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#303168",
        light: "#F7DBC8",
      },
      secondary: {
        main: "#EADEFE",
      },
      background: {
        default: mode === "dark" ? "#ffffff" : "#F3F4F6", //"#FFFBFB"
        paper: mode === "dark" ? "#EADEFE" : "#ffffff", // "#2D3748"
      },
      text: {
        primary: mode === "dark" ? "#303169" : "#11235A",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },

    typography: {
      // Global typography styles
      fontFamily: "Roboto, sans-serif", // Adjust as needed
      fontSize: 14, // Base font size
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: 36,
        fontWeight: 600,
        lineHeight: 1.25,
      },
      h2: {
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 1.15,
      },
      h4: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1.1,
      },
      h5: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.25,
      },
      h6: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.45,
      },
      caption: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1.4,
      },
      button: {
        fontSize: 14,
        fontWeight: 500,
        textTransform: "uppercase", // Optional for button text
      },
    },
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
