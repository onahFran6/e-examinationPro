"use client";
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  Card,
  Divider,
  Grid,
} from "@mui/material";

export const MainContainer = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(6),
  position: "relative",
  // background: "linear-gradient(88deg, #C5F3FF 0%, #D6F7FF 100%)",
}));

export const ContentContainer = styled("div")(({ theme }) => ({
  maxWidth: "660px",
  margin: "auto",
  marginTop: theme.spacing(4),
}));

export const SpecializationCard = styled(Card)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "120px",
  padding: theme.spacing(2),
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 700ms ease-in-out",
  backgroundColor: "#89FFFE30", //#89FFFE
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    transform: "scale(1.05)",
    boxShadow: 3,
  },
}));

export const LookingForCard = styled(Card)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "80px",
  padding: theme.spacing(2),
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 700ms ease-in-out",
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.primary.light, // "#F6D2BB",
    transform: "scale(1.05)",
  },
}));

export const MiniCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "4px",
  position: "absolute",
  zIndex: 1,
  backgroundColor: theme.palette.background.default,
}));

export const ImageForCall = styled("img")(({ theme }) => ({
  width: "50px",
  height: "50px",
  objectFit: "cover",
  borderRadius: "4px",
  position: "absolute",
  zIndex: 1,
}));

export const ActionButton = styled(Button)({
  backgroundColor: "#89FFFE",
  color: "black",
  fontSize: "8px",
});

export const ImageContainer = styled(Box)(({ theme }) => ({
  marginX: "auto",
  backgroundColor: "white",
  borderRadius: "20px",
  position: "absolute",
  bottom: theme.spacing(-38),
  boxShadow: "5px 15px 15px rgba(0, 0, 0, 0.2)",
  [theme.breakpoints.down("sm")]: {
    bottom: theme.spacing(-26),
  },
}));

export const ConsultationImage = styled("img")(({ theme }) => ({
  height: "400px",
  width: "750px",
  padding: "5px",
  borderRadius: "20px",
  objectFit: "fill",
  alignSelf: "center",
}));

export const ImageForSpecialization = styled("img")(({ theme }) => ({
  width: "20px",
  //   minWidth: "100%",
  //   maxWidth: "500px",
  height: "20px",
  borderRadius: "30px",
  objectFit: "cover",
  marginX: "auto",
  alignSelf: "center",
}));

export const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "inherit",
  borderRadius: "20px",
  objectFit: "cover",
  alignSelf: "center",
  // marginLeft: "20px",
  position: "relative",
  // overflowX: "hidden",
}));

export const DownloadAppImage = styled("img")(({ theme }) => ({
  width: "60%",
  height: "inherit",
  borderRadius: "20px",
  objectFit: "cover",
  alignSelf: "center",
  marginLeft: "20px",
  // overflowX: "hidden",
}));

export const ImageForProfile = styled("img")(({ theme }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  objectFit: "fill",
  alignSelf: "center",
  marginTop: "5px",
}));

export const ImageForIcon = styled("img")(({ theme }) => ({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  objectFit: "fill",
  alignSelf: "center",
}));

export const ImageForMembership = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "20px",
  objectFit: "fill",
  alignSelf: "center",
}));

export const TopDoctorText = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  paddingRight: theme.spacing(2),
  textAlign: "center",
  marginTop: theme.spacing(30),
  color: "#303169",
}));
