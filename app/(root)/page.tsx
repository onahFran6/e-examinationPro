"use client";
import React, { FormEvent, useState } from "react";
import { TopSpecializationData } from "@/constant/TopSpecializationData";
import {
  ConsultoLinkData,
  PatientLinkData,
  DoctorsLinkData,
  ClinicsLinkData,
  HospitalsLinkData,
  MoreLinkData,
} from "@/constant/FooterLinkData";
import { socialMediaData } from "@/constant/SocialMediaData";
import { SocialMediaDataType } from "@/types/types";

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
import Link from "next/link";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useTheme } from "@mui/material/styles";
import AdbIcon from "@mui/icons-material/Adb";
import {
  ActionButton,
  ImageForSpecialization,
  SpecializationCard,
  TopDoctorText,
  Image,
  ImageForMembership,
  ImageForProfile,
  ImageForIcon,
  DownloadAppImage,
  MiniCard,
} from "@/stylesComponent/StylesComponent";
import HeroComponent from "@/components/ui/HeroComponent";
import { AlertColor } from "@mui/material/Alert";
import CustomizedSnackbar from "@/components/ui/CustomSnackbar";
import Header from "@/components/shared/Header";

const Home: React.FC = () => {
  const [isHovered, setHovered] = useState(false);
  const [isTopSpecializationHovered, setTopSpecializationHovered] = useState();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

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

  const theme = useTheme();

  const sendDownloadLink = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    // Validation logic
    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number

    if (!phoneRegex.test(phoneNumber)) {
      const message = "Please enter a valid 10-digit phone number";
      handleClick({ message, severity: "error" });
      return;
    }
    const message = "App Download link has been send to your number";
    handleClick({ message, severity: "success" });
    setPhoneNumber("");
  };

  const handleSpecialistSearch = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!searchValue) {
      const message = "Please enter a search value";
      handleClick({ message, severity: "error" });
      return;
    }
    setSearchValue("");
  };

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(88deg, #C5F3FF 0%, #D6F7FF 100%)",
          position: "relative",
        }}
      >
        {" "}
        <Box
          sx={{
            width: { xs: "100px", sm: "1500px", md: "200px" },
            height: { xs: "100px", sm: "200px", md: "300px" },
            left: "20px",
            top: "20px",
            position: "absolute",
            background: "#EADEFE",
            boxShadow: "450px 450px 450px ",
            borderRadius: "80%",
            filter: "blur(450px)",
          }}
        />
        <Box
          sx={{
            width: { xs: "100px", sm: "1500px", md: "200px" },
            height: { xs: "100px", sm: "200px", md: "300px" },
            right: "10px",
            bottom: "10px",
            position: "absolute",
            background: "#EADEFE",
            boxShadow: "450px 450px 450px ",
            borderRadius: "90%",
            filter: "blur(450px)",
          }}
        />
        <Box
          sx={{
            width: "100px",
            height: "100px",
            background: "linear-gradient(128deg, #DEF9FE 0%, #CAF3FF 100%)",
            borderRadius: "100%",
            position: "absolute",
            left: { xs: "50px", sm: "80px", md: "160px" },
            bottom: { xs: "50px", sm: "100px", md: "150px" },
          }}
        />
        <Header />
        <HeroComponent />
      </Box>
      {/* use for rendering alert to the user */}
      <CustomizedSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        setOpen={setSnackbarOpen}
      />
      <Container
        sx={{
          py: { xs: 1, sm: 4 },
          position: "relative",
        }}
      >
        {/* top doctor */}
        <Box>
          <Box
            sx={{
              paddingX: { xs: "5px", sm: "20px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "90%", sm: "648px" },
              mx: "auto",
            }}
          >
            <TopDoctorText
              sx={{
                fontSize: { xs: "20px", sm: "32px" },
                fontWeight: 700,
              }}
            >
              Consult Top Doctors Online For Any Health Concern
            </TopDoctorText>
          </Box>

          <Box
            sx={{
              paddingX: { xs: "5px", sm: "20px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "90%", sm: "648px" },
              mx: "auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                pt: 2,
                color: "gray",
                fontSize: "12px",
              }}
            >
              Private Online consultations with verified doctors in all
              specialties
            </Typography>
          </Box>
        </Box>

        {/* top specialization */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            mt: 5,
            overflowX: "auto",
            padding: "24px",
          }}
        >
          {" "}
          <Grid container spacing={2}>
            {TopSpecializationData.map((item, index) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={2}
                  key={`TopSpecialization ${index}`}
                >
                  <SpecializationCard
                    key={index}
                    onMouseEnter={() => {
                      setHovered(true);
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={() => {
                      setHovered(false);
                      setHoveredIndex(null);
                    }}
                  >
                    <ImageForSpecialization
                      src={item.image}
                      alt=""
                      sx={{ width: "40px", height: "40px" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        width: "fit-content",
                        whiteSpace: "nowrap",
                        mx: "auto",
                        color: "black",
                      }}
                    >
                      {item.name}
                    </Typography>
                    {hoveredIndex === index && (
                      <ActionButton color="primary">Consult Now</ActionButton>
                    )}
                  </SpecializationCard>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              bgcolor: "#303169",
              marginTop: "20px",
              borderRadius: "50px",
              color: "#ffffff",
              px: 2,
              fontSize: "12px",
              "&:hover": {
                bgcolor: theme.palette.primary.light,
                color: "#18181B",
              },
            }}
            onClick={handleSpecialistSearch}
          >
            See All Specialities
          </Button>
        </Box>

        {/* doctor location  */}
        <Box py={4}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                paddingLeft: { xs: "30px", sm: "60px" },
                paddingRight: "20px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#89FFFE",
                  height: { xs: "240px", sm: "300px" },
                  position: "relative",
                }}
              >
                <MiniCard
                  sx={{
                    top: { xs: 40, sm: 80 },
                    left: { xs: -30, sm: -60 },
                    height: { xs: "80px", sm: "100px" },
                    width: { xs: "140px", sm: "160px" },
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                      }}
                    >
                      <ImageForIcon
                        src={"./assets/images/locationIcon.png"}
                        alt={`location Icon `}
                      />
                    </Grid>
                    <Grid item xs={8} sx={{ paddingTop: "10px" }}>
                      {" "}
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          width: "fit-content",
                          whiteSpace: "wrap",
                          color: theme.palette.primary.main,
                          fontWeight: 700,
                        }}
                      >
                        Location
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "12px",
                          width: "fit-content",
                          whiteSpace: "wrap",
                          mx: "auto",
                          color: "#787887",
                          fontWeight: 400,
                        }}
                      >
                        Set your location & see your nearest top doctors
                      </Typography>
                    </Grid>
                  </Grid>
                </MiniCard>
                <Image
                  src="./assets/images/doctorLocation.jpeg"
                  alt="doctor location"
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: { sm: "flex" },
                alignItems: "center",
                paddingLeft: { xs: "10px", sm: "20px" },
              }}
            >
              <Grid sx={{ marginTop: { xs: "10px" } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "20px", sm: "32px" },
                    fontWeight: 500,
                    textAlign: { xs: "center", sm: "left" },
                    color: "#303169",
                  }}
                >
                  Your Nearest Doctor
                </Typography>
                <Box sx={{ textAlign: { xs: "center", sm: "left" }, pt: 3 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      color: "gray",
                    }}
                  >
                    Select preferred doctor and time slot to book
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      mt: 1,
                      color: "gray",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    in-clinic or video consultation. It's a very easy
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      mt: 1,
                      color: "gray",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    and simple process to booking.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "left" },
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#303169",
                      marginTop: "20px",
                      borderRadius: "50px",
                      color: theme.palette.background.default,
                      px: 2,
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: theme.palette.primary.light,
                        color: "#18181B",
                      },
                    }}
                  >
                    Find Doctor Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* doctor online  */}
        <Box p={{ xs: 1, sm: 4 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: { sm: "flex" },
                alignItems: "center",
                order: { xs: 2, sm: 1 },
              }}
            >
              <Grid sx={{ marginBottom: { xs: "10px" }, alignItems: "center" }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "20px", sm: "32px" },
                    fontWeight: 500,
                    textAlign: { xs: "center", sm: "left" },
                    color: "#303169",
                  }}
                >
                  Urgent Online Care
                </Typography>
                <Box sx={{ textAlign: { xs: "center", sm: "left" }, pt: 3 }}>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: { xs: "12px", sm: "16px" }, color: "gray" }}
                  >
                    Tell your health concern and we will assign you a
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      color: "gray",
                      mt: 1,
                    }}
                  >
                    top Doctor in 60 secs.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "left" },
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#303169",
                      marginTop: "20px",
                      borderRadius: "50px",
                      color: theme.palette.background.default,
                      px: 2,
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: theme.palette.primary.light,
                        color: "#18181B",
                      },
                    }}
                  >
                    Take Appointment
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                // paddingLeft: "20px",
                marginTop: { xs: "10px", sm: "20px" },
                paddingLeft: { xs: "40px", sm: "60px" },
                paddingRight: "10px",
                order: { xs: 1, sm: 2 },
                marginBottom: { xs: "20px", sm: "10px" },
              }}
            >
              <Box
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#89FFFE55",
                  height: { xs: "240px", sm: "300px" },
                  position: "relative",
                }}
              >
                <MiniCard
                  sx={{
                    top: { xs: 40, sm: 80 },
                    left: { xs: -50, sm: -60 },
                    height: { xs: "80px", sm: "100px" },
                    width: { xs: "140px", sm: "160px" },
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                      }}
                    >
                      <ImageForIcon
                        src={"./assets/images/onlineIcon.png"}
                        alt={`location Icon `}
                      />
                    </Grid>
                    <Grid item xs={8} sx={{ paddingTop: "10px" }}>
                      {" "}
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          width: "fit-content",
                          whiteSpace: "wrap",
                          color: theme.palette.primary.main,
                          fontWeight: 700,
                        }}
                      >
                        Doctor Online
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "10px", sm: "12px" },
                          width: "fit-content",
                          whiteSpace: "wrap",
                          mx: "auto",
                          color: "#787887",
                          fontWeight: 400,
                        }}
                      >
                        Make an Online appointment
                      </Typography>
                    </Grid>
                  </Grid>
                </MiniCard>
                <Image
                  src="./assets/images/doctorOnline.jpeg"
                  alt=""
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/*get membership   */}
        <Box
          p={{ xs: 1, sm: 4 }}
          my={{ xs: 2, sm: 4 }}
          sx={{ backgroundColor: "#F6D2BB99", borderRadius: "30px" }}
        >
          <Grid container>
            <Grid
              item
              xs={6}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageForMembership
                src="./assets/images/consultaMembership.jpeg"
                alt="get membership"
                sx={{
                  height: { xs: "100%", sm: "300px" },
                }}
              />
            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                sx={{
                  marginTop: "10px",
                  marginLeft: { xs: "5px", sm: "20px" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    backgroundColor: "#ffffff",
                    width: "fit-content",
                    border: "1px solid #ffffff",
                    p: { xs: "5px", sm: "10px" },
                    borderRadius: "50px",
                    fontSize: { xs: "12px", sm: "20px" },
                  }}
                >
                  Consulto Plus
                </Typography>
                <Box sx={{ textAlign: "left", pt: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "14px", sm: "24px" },
                      fontWeight: 500,
                      textAlign: "left",
                      color: "#303169",
                    }}
                  >
                    Free Online Consultation
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "14px", sm: "24px" },
                      fontWeight: 500,
                      textAlign: "left",
                      color: "#303169",
                    }}
                  >
                    Starting at $49/month
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: "#303169",
                      marginY: { xs: "10px", sm: "20px" },
                      borderRadius: "50px",
                      color: "#ffffff",
                      px: 2,
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: theme.palette.background.paper,
                        color: "#18181B",
                      },
                    }}
                  >
                    Get Membership
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* patient */}
        <Box p={{ xs: 2, sm: 4 }}>
          <Grid container>
            <Grid item xs={12} sm={6} sx={{ paddingRight: "20px" }}>
              <Box
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#89FFFE",
                  height: { xs: "200px", sm: "300px" },
                  position: "relative",
                  my: { xs: "10px", sm: "20px" },
                }}
              >
                <Image
                  src="./assets/images/patient.jpeg"
                  alt="patient"
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                  }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: { sm: "flex" }, alignItems: "center" }}
            >
              <Grid
                sx={{
                  marginTop: { xs: "2px" },
                  marginLeft: { xs: "10px", sm: "30px" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "20px", sm: "28px" },
                    fontWeight: 400,
                    textAlign: { xs: "center", sm: "left" },
                    color: "#303169",
                  }}
                >
                  What Our Patient Say About Our Service
                </Typography>
                <Box sx={{ textAlign: { xs: "center", sm: "left" }, pt: 3 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      color: "gray",
                      lineHeight: 1.5,
                    }}
                  >
                    "Very helpful.For easier than doing same things on
                    computer.Allows quick and easy search with speed booking.
                    Even maintains history of doctors visited.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <ImageForProfile
                    src={"./assets/images/profile.jpg"}
                    alt="profile"
                  />
                  <Box
                    sx={{
                      textAlign: "left",
                      paddingTop: "15px",
                      marginLeft: "15px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "12px", sm: "16px" },
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Francis Onah
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "10px", sm: "12px" },
                        color: "gray",
                      }}
                    >
                      President Of FranLtd
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* download app */}
        <Box p={{ xs: 1, sm: 4 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                display: { sm: "flex" },
                alignItems: "center",
                order: { xs: 2, sm: 1 },
              }}
            >
              <Grid
                sx={{
                  marginBottom: { xs: "10px" },
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "20px", sm: "28px" },
                    fontWeight: 500,
                    textAlign: { xs: "center", sm: "left" },
                    color: "#303169",
                  }}
                >
                  Download Consulto App & Get $100 HealthCash
                </Typography>
                <Box sx={{ textAlign: "left", pt: 3 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px", lineHeight: 1.5 },
                      color: "gray",
                    }}
                  >
                    video consultation with USA"s top doctors on the Consulto
                    app. Connect with doctors online.We are available 24/7, from
                    the comfort of your home.
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      mt: 1,
                      color: "#303169",
                      fontWeight: 300,
                    }}
                  >
                    Get the link to download the app
                  </Typography>
                </Box>

                <Box
                  sx={{
                    // border: "1px solid #D1D5DB",
                    // bgcolor: "#ffffff",
                    borderRadius: "50px",
                    display: "flex",
                    py: "1px",
                    // position: "relative",
                    width: "fit-content",
                    mt: 3,
                    paddingX: { xs: "5px", sm: "20px" },
                    mx: { xs: "auto", sm: "0px" },
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      border: "1px solid #D1D5DB",
                      borderRadius: "50px",
                      position: "relative",
                      height: { xs: "50px", sm: "60px" },
                      marginBottom: { xs: "20px", sm: "0px" },
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={8}
                      sx={{
                        display: "flex",
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "inherit",
                      }}
                    >
                      <ContactPhoneIcon
                        sx={{
                          color: "#303169",
                          marginX: { xs: "1px", sm: "10px" },
                        }}
                      />
                      <TextField
                        variant="standard"
                        value={phoneNumber}
                        type="number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                        sx={{
                          borderRadius: "50px",
                          outline: "none",
                          border: 0,
                          paddingX: 1,
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      sx={{
                        display: "flex",
                        position: "relative",
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "flex-end" },
                        height: "inherit",
                        // border: "1px solid #D1D5DB",
                      }}
                    >
                      <Button
                        sx={{
                          fontSize: "12px",
                          width: "fit-content",
                          bgcolor: "#303169",
                          borderRadius: "50px",
                          color: theme.palette.background.default,
                          px: { xs: 1, sm: 1 },
                          m: 1,
                          "&:hover": {
                            bgcolor: theme.palette.primary.light,

                            color: "#18181B",
                          },
                        }}
                        onClick={sendDownloadLink}
                      >
                        Send SMS
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                {/* DOWNLOAD BUTTON */}

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: { xs: 1, sm: 2 },
                    mt: 2,
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#F6D2BB99",
                      marginTop: "20px",
                      borderRadius: "50px",
                      width: "fit-content",
                      color: "#ffffff",
                      px: { xs: 2, sm: 4 },
                      // fontSize: "12px",
                      "&:hover": {
                        bgcolor: "#4A4A78",
                        color: "#18181B",
                      },
                    }}
                  >
                    {" "}
                    <ImageForIcon
                      src={"./assets/images/appleIcon.png"}
                      alt="download on apple store"
                    />
                    <Box
                      sx={{
                        textAlign: "left",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: "6px", sm: "12px" },
                          color: "gray",
                        }}
                      >
                        Download on
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "6px", sm: "12px" },
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Apple Store
                      </Typography>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      bgcolor: "#F6D2BB99",
                      marginTop: "20px",
                      borderRadius: "50px",
                      width: "fit-content",
                      color: "#ffffff",
                      px: { xs: 2, sm: 4 },
                      // fontSize: "12px",
                      "&:hover": {
                        bgcolor: "#4A4A78",
                        color: "#18181B",
                      },
                    }}
                  >
                    {" "}
                    <ImageForIcon
                      src={"./assets/images/playstoreicon.png"}
                      alt="Download on Google play "
                    />
                    <Box
                      sx={{
                        textAlign: "left",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: "6px", sm: "12px" },
                          color: "gray",
                        }}
                      >
                        Download on
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "6px", sm: "12px" },
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Google Play
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                order: { xs: 1, sm: 2 },
              }}
            >
              <Box
                sx={{
                  borderRadius: "120%",
                  backgroundColor: "#F6D2BB99",
                  height: { xs: "200px", sm: "300px" },
                  display: "flex",
                  justifyContent: "center",
                  marginY: { xs: "10px", sm: "20px" },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "20px",
                    height: { xs: "200px", sm: "300px" },
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <DownloadAppImage
                    src="./assets/images/downloadApp.jpeg"
                    alt=" download app"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* footer */}
        <Box
          sx={{
            display: "flex",
            mt: 5,
            padding: "24px",
          }}
        >
          <Grid container>
            {/* consulto  footer link */}
            <Grid
              item
              xs={6}
              sm={2.4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: { sx: "20px", sm: "2px" },
              }}
              py={2}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "bold",
                  color: "#303169",
                }}
              >
                Consulto
              </Typography>
              {ConsultoLinkData.map((data, index) => {
                return (
                  <Link href={`/`} key={`Consulto${index}`}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "14px", sm: "18px" },
                        color: "gray",
                        fontWeight: 300,
                        "&:hover": {
                          bgcolor: theme.palette.primary.light,
                        },
                      }}
                    >
                      {data}
                    </Typography>
                  </Link>
                );
              })}
            </Grid>

            {/* Patien Footer link  */}
            <Grid
              item
              xs={6}
              sm={2.4}
              // md={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: { sx: "20px", sm: "2px" },
              }}
              py={2}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "bold",
                  color: "#303169",
                }}
              >
                For Patients
              </Typography>
              {PatientLinkData.map((data, index) => {
                return (
                  <Link href={`/`} key={`Patient${index}`}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "14px", sm: "18px" },
                        color: "gray",
                        fontWeight: 300,
                        "&:hover": {
                          bgcolor: theme.palette.primary.light,
                        },
                      }}
                    >
                      {data}
                    </Typography>
                  </Link>
                );
              })}
            </Grid>

            {/* Doctor and Clinics Footer link  */}
            <Grid
              item
              xs={6}
              sm={2.4}
              // md={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              py={2}
              px={{ xs: 0, sm: 2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "bold",
                  color: "#303169",
                }}
              >
                For Doctors
              </Typography>
              {DoctorsLinkData.map((data, index) => {
                return (
                  <Link href={`/`} key={`doctorLink${index}`}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "14px", sm: "18px" },
                        color: "gray",
                        fontWeight: 300,
                        "&:hover": {
                          bgcolor: theme.palette.primary.light,
                        },
                      }}
                    >
                      {data}
                    </Typography>
                  </Link>
                );
              })}
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "bold",
                  color: "#303169",
                }}
              >
                For Clinics
              </Typography>
              {ClinicsLinkData.map((data, index) => {
                return (
                  <Link href={`/`} key={`Clinics${index}`}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "14px", sm: "18px" },
                        color: "gray",
                        fontWeight: 300,
                        "&:hover": {
                          bgcolor: theme.palette.primary.light,
                        },
                      }}
                    >
                      {data}
                    </Typography>
                  </Link>
                );
              })}
            </Grid>

            {/* Hospital Footer link  */}
            <Grid
              item
              xs={6}
              sm={2.4}
              // md={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              py={2}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "bold",
                  color: "#303169",
                }}
              >
                For Hospitals
              </Typography>
              {HospitalsLinkData.map((data, index) => {
                return (
                  <Link href={`/`} key={`Hospitals${index}`}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "14px", sm: "18px" },
                        color: "gray",
                        fontWeight: 300,
                        "&:hover": {
                          bgcolor: theme.palette.primary.light,
                        },
                      }}
                    >
                      {data}
                    </Typography>
                  </Link>
                );
              })}
            </Grid>

            {/* More Footer link  */}
            <Grid
              item
              xs={12}
              sm={2.4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                // justifyContent: "space-between",
              }}
              py={2}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "bold",
                  color: "#303169",
                }}
                alignSelf={{ xs: "center", sm: "start" }}
              >
                More
              </Typography>
              {MoreLinkData.map((data, index) => {
                return (
                  <Box
                    alignSelf={{
                      xs: "center",
                      sm: "start",
                    }}
                    sx={{
                      "&:hover": {
                        bgcolor: theme.palette.primary.light,
                      },
                    }}
                    key={`More${index}`}
                  >
                    <Link href={`/`}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: { xs: "14px", sm: "18px" },
                          color: "gray",
                          fontWeight: 300,
                        }}
                        alignSelf={{ xs: "start", sm: "start" }}
                      >
                        {data}
                      </Typography>
                    </Link>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
          {/* consulto  footer link */}
        </Box>
        <Divider
          sx={{
            border: "1px solid gray",
          }}
        />

        {/* Below the footer */}
        <Box
          sx={{
            display: "flex",
            mt: 2,
            padding: "5px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              "&:hover": {
                bgcolor: theme.palette.primary.light,
              },
            }}
          >
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "satoshi",
                fontWeight: 700,
                letterSpacing: { xs: ".1rem", sm: ".3rem" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CONSULTO
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            {socialMediaData.map((data: SocialMediaDataType, index: number) => (
              <Link
                href={data.socialMediaLink}
                passHref
                target="_blank"
                key={`socialMediaLink${index}`}
              >
                <ImageForIcon
                  src={`./assets/images/${data.socialMediaImage}`}
                  alt={`Social Media Icon ${index + 1}`}
                  rel="noopener noreferrer"
                  sx={{
                    "&:hover": {
                      bgcolor: theme.palette.primary.light,
                    },
                  }}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
