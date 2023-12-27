"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// interface FooterProps {
//   className?: string;
// }

const LoginFooter: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#EADEFE",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid sx={{ display: { sx: "none", sm: "flex" } }}>
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: theme.palette.primary.main,
            height: "100%",
            fontSize: { xs: "12px", sm: "16px" },
          }}
        >
          Privacy Policy / Terms and Conditions
        </Typography>
      </Grid>
    </Box>
  );
};

export default LoginFooter;
