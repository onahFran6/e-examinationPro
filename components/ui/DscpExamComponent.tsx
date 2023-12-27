// DescriptiveExamPage.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Typography,
  TextField,
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
import { useMediaQuery } from "@mui/material";
import UploadFile from "./UploadFile";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import CustomizedSnackbar from "./CustomSnackbar";
import { alpha, styled } from "@mui/material/styles";

const DescriptiveExamPage: React.FC = () => {
  const dispatch = useDispatch();
  const examState = useSelector((state: RootState) => state.exams);
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [answerTypes, setAnswerTypes] = useState<string>("");
  const [fileUrl, setFileUrl] = useState<string>("");
  const [textAreaAnswer, setTextAreaAnswer] = useState<string>("");
  const [isSave, setIsSave] = useState<boolean>(false);

  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] =
    React.useState<AlertColor>("success");

  const isXSScreen = useMediaQuery("(max-width: 479px)");

  const { currentQuestionIndex, timer, examQuestions } = examState;
  const currentQuestion = examQuestions[currentQuestionIndex];

  const router = useRouter();
  const theme = useTheme();

  console.log("===>>>> dsce", { state: examState });

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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    console.log("===>>>> selectedFile", { selectedFile });
    if (selectedFile) {
      // Validate file type (e.g., check for PDF)
      if (selectedFile.type !== "application/pdf") {
        // Display error message
        return;
      }
      console.log("===>>>> selectedFile", { selectedFile });
      setUploadedFile(selectedFile);
    }
  };

  const handleAnswerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextAreaAnswer(event.target.value);
  };

  const handleSaveAnswer = () => {
    if (answerTypes === "fileUpload") {
      setIsSave(true);
      setCurrentAnswer(fileUrl);
      return;
    }
    if (!textAreaAnswer) {
      const message = "You are yet to select an answer.";
      handleClick({ message, severity: "error" });
      return;
    }
    setIsSave(true);
    setCurrentAnswer(textAreaAnswer);
    const message = "Answer has been saved successfully";
    handleClick({ message, severity: "info" });
    return;
  };

  const handleFinishExam = async () => {
    if (!currentAnswer && !isSave) {
      const message = "please save your answer before proceeding";
      handleClick({ message, severity: "info" });
      return;
    }

    if (currentAnswer && isSave) {
      dispatch(finishExam());
      router.push("/thank");
      return null;
    }
    const message = "You are yet to select an answer.";
    handleClick({ message, severity: "error" });
  };

  const handleNextQuestion = async () => {
    if (!currentAnswer && !isSave) {
      const message = "please save your answer before proceeding";
      handleClick({ message, severity: "info" });
      return;
    }

    if (currentAnswer) {
      if (currentQuestionIndex === 9) {
        dispatch(finishExam());
        router.push("/thank");
        return null;
      }

      dispatch(
        submitAnswer({
          questionId: currentQuestion.id,
          answer: currentAnswer,
        })
      );

      dispatch(goToNextQuestion());
    } else {
      const message = "You are yet to select an answer.";
      handleClick({ message, severity: "error" });
    }
  };

  return (
    <>
      <Grid container spacing={4} sx={{ paddingX: "20px", minHeight: "100%" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
            marginX: { xs: "5px", sm: "10px" },
            height: { xs: "200px", sm: "300px" },
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              height: "70%",
            }}
          >
            <TextField
              multiline
              variant="standard"
              rows={4}
              fullWidth
              value={textAreaAnswer}
              onChange={handleAnswerChange}
              placeholder="you can type here"
              sx={{
                color: theme.palette.primary.main,
                paddingY: "2px",
                marginX: "40px",
                border: "1px solid lightskyblue",
                height: "120px",
                "& .MuiInputBase-input": {
                  paddingX: "10px",
                  outline: "none",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "space-between", sm: "end" },
              alignItems: "center",
              height: "10%",
              marginTop: "15px",
              marginX: "40px",
            }}
          >
            <Button
              variant="outlined"
              // color="secondary"
              onClick={handleSaveAnswer}
              size="small"
              sx={{
                paddingY: 0,
                marginY: 0,
                fontWeight: 500,
                marginRight: isXSScreen ? "10px" : "40px",
                padding: "4px",
                color: theme.palette.background.default,
                bgcolor: theme.palette.primary.main,
                "&:hover": {
                  bgcolor: theme.palette.primary.light,
                },
              }}
            >
              save
            </Button>
            <UploadFile
              setAnswerTypes={setAnswerTypes}
              setFileUrl={setFileUrl}
            ></UploadFile>
          </Grid>
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
            height: "20%",
          }}
        >
          <Button
            variant="outlined"
            // color="secondary"
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

export default DescriptiveExamPage;
