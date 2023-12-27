import React, { FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { loginSuccess, loginFailure } from "@/store/slice/userSlice";
import { startExam } from "@/store/slice/examSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import CustomizedSnackbar from "./CustomSnackbar";
import { AlertColor } from "@mui/material/Alert";

const LoginSignupPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.user
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(loginSuccess(email));
  };

  const handleStartExam = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateEmail(email) || email.length < 3) {
      const message =
        "Please enter a valid email with a minimum of 3 characters.";
      handleClick({ message, severity: "error" });
      return;
    }

    if (password.length < 3) {
      const errMess = "Please enter a password with a minimum of 3 characters.";
      handleClick({ message: errMess, severity: "error" });
      return;
    }

    try {
      // Dispatch login action with email and update the authentication state
      dispatch(loginSuccess(email));
      dispatch(startExam());
      router.push("/exams");
      const message = `Welcome, ${email}! You are logged in.`;
      handleClick({ message, severity: "success" });
    } catch (error) {
      const message = "Authentication failed. Please check your ";
      handleClick({ message, severity: "success" });
    } finally {
    }
  };

  const validateEmail = (email: string): boolean => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#FEE0EF97",
          py: { xs: "20px", sm: "40px" },
          width: { xs: "80%", sm: "100%" },
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
            justifyContent: "center",
            alignItems: "center",
            marginBottom: { xs: "10px", sm: "20px" },
          }}
        >
          <Typography variant="h3" gutterBottom>
            Customer Login
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label=""
            placeholder="email address"
            variant="outlined"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              borderRadius: "10px",
              mx: {
                xs: "auto",
              },
              backgroundColor: theme.palette.background.default, // Set background color here
              color: theme.palette.primary.main,
              width: { sm: "70%" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label=""
            placeholder="password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              borderRadius: "10px",
              mx: {
                xs: "auto",
              },
              backgroundColor: theme.palette.background.default,
              color: theme.palette.primary.main,
              width: { sm: "70%" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleStartExam}
            sx={{
              bgcolor: "#303169",
              borderRadius: "5px",
              mx: {
                xs: "auto",
              },
              color: theme.palette.background.default,
              px: 2,
              width: { sm: "70%" },
              fontSize: "16px",
              "&:hover": {
                bgcolor: theme.palette.primary.light,
              },
              my: "30px",
              height: "50px",
            }}
          >
            Start Exam
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginSignupPage;
