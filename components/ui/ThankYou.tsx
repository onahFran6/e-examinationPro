"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const ThankYou = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={4}
      sx={{
        backgroundColor: "white",
        paddingX: "20px",
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.primary.main,
          paddingY: "2px",
          margin: "2px",
          fontSize: { xs: "16px", sm: "24px" },
        }}
      >
        Thank you for your time{" "}
      </Typography>
    </Grid>
  );
};

export default ThankYou;
