"use client";

import LoginHeader from "@/components/ui/LoginHeader";
import ThankYou from "@/components/ui/ThankYou";
import { RootState } from "@/store/store";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const pages = () => {
  const user = useSelector((state: RootState) => state.user);
  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.user
  );
  const { isFinishExam } = useSelector((state: RootState) => state.exams);
  const router = useRouter();

  if (!isAuthenticated && !isFinishExam) {
    router.push("/login");
    return null;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Grid
        item
        xs={12}
        sx={{
          position: "sticky",
          top: 0,
          height: "10%",
          backgroundColor: "red",
        }}
      >
        <LoginHeader></LoginHeader>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "90%",
        }}
      >
        <ThankYou></ThankYou>
      </Grid>
    </Box>
  );
};

export default pages;
