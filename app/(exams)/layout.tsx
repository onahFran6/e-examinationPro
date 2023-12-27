import * as React from "react";
import Box from "@mui/material/Box";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box>{children}</Box>;
}
