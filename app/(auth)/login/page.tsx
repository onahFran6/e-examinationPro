"use client";
import LoginFooter from "@/components/ui/LoginFooter";
import LoginHeader from "@/components/ui/LoginHeader";
import LoginSignupPage from "@/components/ui/LoginSignup";
import { RootState } from "@/store/store";
import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const page = () => {
  const isMediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 1024px)"
  );
  const isMobileScreen = useMediaQuery("(max-width: 599px)");

  const isXSScreen = useMediaQuery("(max-width: 479px)");

  const user = useAppSelector((state) => state.user);

  const theme = useTheme();

  console.log("=====>>>>", { user });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          sx={{
            position: "sticky",
            top: 0,
            height: "10%",
            // backgroundColor: "red",
          }}
        >
          <LoginHeader></LoginHeader>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: theme.palette.background.default,
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "inherit",
            }}
          >
            <LoginSignupPage />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            position: "sticky",
            bottom: 0,
            height: "20%",
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default page;
