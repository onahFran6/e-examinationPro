import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { ModeProvider } from "@/theme/context";
import { StoreProvider } from "@/store/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consulto ",
  description: "Connect with a Doctor online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          {" "}
          <ModeProvider>
            <ThemeRegistry options={{ key: "mui" }}>
              <AppRouterCacheProvider>{children}</AppRouterCacheProvider>{" "}
            </ThemeRegistry>
          </ModeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
