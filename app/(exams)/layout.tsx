import * as React from "react";
import Box from "@mui/material/Box";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={{ maxHeight: "100vh" }}>{children}</Box>;
}
//<Box sx={{ display: "flex", maxHeight: "100vh" }}>{children}</Box>;
