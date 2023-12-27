"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  AlertColor,
} from "@mui/material";
import { RootState } from "@/store/store";
import {
  finishExam,
  goToNextQuestion,
  submitAnswer,
} from "@/store/slice/examSlice";

import Timer from "./Timer";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import CustomizedSnackbar from "./CustomSnackbar";

const MCQExamPage: React.FC = () => {
  const [currentAnswer, setCurrentAnswer] = useState("");
  const dispatch = useDispatch();
  const { currentQuestionIndex, timer, examQuestions } = useSelector(
    (state: RootState) => state.exams
  );
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] =
    React.useState<AlertColor>("success");

  // function to handle snackbar messages
  const handleClick = ({
    message,
    severity,
  }: {
    message: string;
    severity: AlertColor;
  }) => {
    setSnackbarOpen(true);
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
  };

  const router = useRouter();
  const theme = useTheme();

  console.log("===>>>> dsce", {
    state: { currentQuestionIndex, timer, examQuestions },
  });

  const currentQuestion = examQuestions[currentQuestionIndex];
  const radioOption = [
    currentQuestion?.choice_1,
    currentQuestion?.choice_2,
    currentQuestion?.choice_3,
    currentQuestion?.choice_4,
  ];

  const handleAnswerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log("===>>>>", { answer: event.target.value });
    setCurrentAnswer(event.target.value);
    // dispatch(
    //   submitAnswer({
    //     questionId: currentQuestionIndex,
    //     answer: event.target.value,
    //   })
    // );
  };

  const handleFinishExam = async () => {
    if (currentAnswer) {
      dispatch(finishExam());
      router.push("/thank");
      return null;
    }
    const message = "You are yet to select an answer.";
    handleClick({ message, severity: "error" });
  };

  const handleNextQuestion = async () => {
    if (currentAnswer) {
      dispatch(
        submitAnswer({
          questionId: currentQuestion.id,
          answer: currentAnswer,
        })
      );

      if (currentQuestionIndex === 9) {
        dispatch(finishExam());
        router.push("/thank");
        return null;
      }

      dispatch(goToNextQuestion());
    } else {
      const message = "You are yet to select an answer.";
      handleClick({ message, severity: "error" });
    }
  };

  return (
    <>
      <Grid container spacing={4} sx={{ paddingX: "20px", minHeight: "100%" }}>
        {/* use for rendering alert to the user */}
        <CustomizedSnackbar
          open={snackbarOpen}
          message={snackbarMessage}
          severity={snackbarSeverity}
          setOpen={setSnackbarOpen}
        />
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: theme.palette.primary.main,
                  paddingY: "2px",
                }}
              >
                Question {currentQuestionIndex + 1}:
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: theme.palette.primary.main,
                  paddingY: "2px",
                  marginBlockStart: "2px",
                }}
              >
                <Timer
                  timeRemaining={timer}
                  isAuthenticated={isAuthenticated}
                />
              </Typography>
            </Box>
          </Grid>
          <Box>
            {" "}
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                paddingY: "2px",
                margin: "2px",
                paddingLeft: "20px",
              }}
            >
              {currentQuestion?.question}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            marginX: "40px",
          }}
        >
          <RadioGroup
            value={currentAnswer}
            onChange={(e) => handleAnswerChange(e)}
          >
            {radioOption.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={
                  <Radio
                    sx={{
                      backgroundColor: theme.palette.background.default,
                      color: "blue",
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      marginLeft: "5px",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {option || "No option"}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            bottom: 0,
            position: "relative",
            height: "10%",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleFinishExam}
            size="small"
            sx={{
              paddingY: 0,
              marginY: 0,
              fontWeight: 500,
              color: theme.palette.background.default,
              bgcolor: theme.palette.primary.main,
              "&:hover": {
                bgcolor: theme.palette.primary.light,
              },
            }}
          >
            Finish Exam
          </Button>
          {currentQuestionIndex <= 8 && (
            <Button
              variant="outlined"
              onClick={handleNextQuestion}
              sx={{
                paddingY: 0,
                marginY: 0,
                fontWeight: 500,
                color: theme.palette.background.default,
                bgcolor: theme.palette.primary.main,
                "&:hover": {
                  bgcolor: theme.palette.primary.light,
                },
              }}
            >
              Next
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default MCQExamPage;
