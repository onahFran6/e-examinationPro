"use client";

import { Box, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

import LoginHeader from "@/components/ui/LoginHeader";
import QuestionRenderer from "@/components/ui/Question";
import { RootState } from "@/store/store";

const pages = () => {
  const user = useSelector((state: RootState) => state.user);
  const examState = useSelector((state: RootState) => state.exams);
  const { currentQuestionIndex, timer, examQuestions } = examState;
  const currentQuestion = examQuestions[currentQuestionIndex];
  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.user
  );
  const router = useRouter();
  const theme = useTheme();

  // console.log("=====>>>>  auth", { user });

  // Redirect to the login page if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

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
            display: "flex",
            alignItems: "center",
          }}
        >
          <LoginHeader></LoginHeader>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: theme.palette.background.default,
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginX: { xs: "10px", sm: "80px", md: "140px" },
          }}
        >
          <QuestionRenderer />
          {/* //question_type={currentQuestion?.question_type}  */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default pages;
