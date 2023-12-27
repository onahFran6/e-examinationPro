"use client";

import LoginHeader from "@/components/ui/LoginHeader";
import ThankYou from "@/components/ui/ThankYou";
import { RootState } from "@/store/store";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Thank = () => {
  const user = useSelector((state: RootState) => state.user);
  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.user
  );
  const { isFinishExam } = useSelector((state: RootState) => state.exams);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isFinishExam) {
      router.push("/login");
    }
  }, [isAuthenticated, isFinishExam, router]);

  if (!isAuthenticated && !isFinishExam) {
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThankYou />
      </Grid>
    </Box>
  );
};

export default Thank;
