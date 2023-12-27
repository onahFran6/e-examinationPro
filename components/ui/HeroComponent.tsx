"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";

import AddLocationIcon from "@mui/icons-material/AddLocation";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useTheme } from "@mui/material/styles";
import { Typography, Button, Box, TextField, Grid } from "@mui/material";

import {
  ConsultationImage,
  ContentContainer,
  ImageContainer,
  ImageForCall,
  ImageForIcon,
  LookingForCard,
  MainContainer,
  MiniCard,
} from "@/stylesComponent/StylesComponent";
import { LookingForData } from "@/constant/LookingForData";
import CustomizedSnackbar from "./CustomSnackbar";
import { AlertColor } from "@mui/material/Alert";

const HeroComponent: React.FC = () => {
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

  //   function to handle search
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
      {" "}
      <MainContainer>
        {/* use for rendering alert to the user */}
        <CustomizedSnackbar
          open={snackbarOpen}
          message={snackbarMessage}
          severity={snackbarSeverity}
          setOpen={setSnackbarOpen}
        />
        {/* remove Doubts */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginTop: { xs: "2px", sm: "10px" },
              color: "#18181B",
              fontSize: { xs: 18, sm: 24 },
            }}
          >
            Remove Doubts
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              pt: 2,
              color: theme.palette.primary.main,
              fontSize: { xs: 24, sm: 64 },
            }}
          >
            Free Doctor Consultation
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              maxWidth: { xs: "300px", sm: "500px" },
              margin: "auto",
              pt: 2,
              color: "#18181B",
              fontSize: { xs: 16, sm: 18 },
              fontFamily: "Satoshi",
              fontWeight: "400",
              // mx: { xs: 2 },
            }}
          >
            24/7 Video consultation, Private consultation + Audio call Starts at
            just $10. Exclusive on{" "}
            <Link href="/" passHref>
              <span
                className="mobile-app"
                style={{ textDecoration: "underline", cursor: "allowed" }}
              >
                mobile app
              </span>
            </Link>
          </Typography>
        </Box>

        {/* search component */}
        <Box
          sx={{
            display: "flex",
            width: { xs: "90%", sm: "648px" },
            mt: 4,
            mx: "auto",
            paddingX: { xs: "1px", sm: "20px" },
          }}
        >
          <Grid
            container
            sx={{
              border: "1px solid #D1D5DB",
              bgcolor: "#ffffff",
              borderRadius: "50px",
              position: "relative",
              height: { xs: "50px", sm: "60px" },
            }}
          >
            <Grid
              item
              xs={4}
              sm={4}
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <AddLocationIcon
                sx={{
                  fontSize: { xs: "20px", sm: "30px" },
                  paddingLeft: "10px",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "8px", sm: "16px" },
                  color: "#18181B",
                  width: "fit-content",
                  // wordWrap: "nowrap",
                  paddingX: 1,
                }}
              >
                New York,USA
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                height: "inherit",
                borderLeft: "1px solid #D1D5DB",
              }}
            >
              <SearchOutlinedIcon
                sx={{
                  marginLeft: { xs: "1px", sm: "10px" },
                }}
              />
              <TextField
                variant="standard"
                placeholder="Search for doctors,"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{
                  bgcolor: "transparent",

                  color: "#18181B",
                  outline: "none",
                  border: 0,
                  padding: 2,
                  "& .MuiInputBase-input": {
                    padding: 0,
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              sx={{
                display: "flex",
                position: "relative",
                justifyContent: "end",
                height: "inherit",
              }}
            >
              <Button
                sx={{
                  bgcolor: theme.palette.primary.main,
                  borderRadius: "50px",
                  color: "#ffffff",
                  px: 2,
                  py: 1,
                  my: 2,
                  margin: "10px",
                  fontSize: "12px",
                  "&:hover": {
                    bgcolor: "#4A4A78", // Change to the desired hover color
                  },
                }}
                onClick={handleSpecialistSearch}
              >
                <SearchOutlinedIcon /> Search
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* what are you looking for */}
        <ContentContainer
          sx={{
            marginX: { xs: "20px", sm: "auto" },
            marginBottom: { xs: "20px", sm: "120px" },
          }}
        >
          <Typography sx={{ color: "#303169", my: "10px" }}>
            Are you Looking For:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mx: "auto",
            }}
          >
            <Grid container spacing={2}>
              {LookingForData.map((item, index) => {
                return (
                  <Grid item xs={6} sm={3}>
                    <LookingForCard key={`looking-for-${index}`}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          width: "fit-content",
                          whiteSpace: "nowrap",
                          mx: "auto",
                          color: "#18181B",
                          fontWeight: 500,
                        }}
                      >
                        {item.head}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "12px",
                          width: "fit-content",
                          whiteSpace: "nowrap",
                          mx: "auto",
                          color: "#787887",
                          fontWeight: 400,
                        }}
                      >
                        {item.body}
                      </Typography>
                    </LookingForCard>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </ContentContainer>

        {/* consultation image */}
        <Box
          sx={{
            borderRadius: "50px",
            display: "flex",
            py: 1,
            position: "relative",
            width: "max-content",
            mt: 8,
            mx: "auto",
            paddingX: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageContainer>
            <MiniCard
              sx={{
                top: { xs: 50, sm: 100 },
                left: { xs: -40, sm: -80 },
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
                    src={"./assets/images/consultantIcon.png"}
                    alt={`Social Media Icon `}
                  />
                </Grid>
                <Grid item xs={8} sx={{ paddingTop: "10px" }}>
                  {" "}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      width: "fit-content",
                      whiteSpace: "nowrap",
                      mx: "auto",
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                    }}
                  >
                    Consultant
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
                    Find consultant is remotely free
                  </Typography>
                </Grid>
              </Grid>
            </MiniCard>
            <MiniCard
              sx={{
                top: { xs: 140, sm: 200 },
                right: { xs: -40, sm: -40 },
                height: { xs: "80px", sm: "100px" },
                width: { xs: "150px", sm: "160px" },
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
                    src={"./assets/images/phoneIcon.png"}
                    alt={`Social Media Icon `}
                  />
                </Grid>
                <Grid item xs={8} sx={{ paddingTop: "5px" }}>
                  {" "}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      width: "fit-content",
                      whiteSpace: "nowrap",
                      mx: "auto",
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                    }}
                  >
                    24/7 Service
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "12px",
                      width: "fit-content",
                      whiteSpace: "wrap",
                      color: "#787887",
                      fontWeight: 400,
                    }}
                  >
                    We are available when you want
                  </Typography>
                </Grid>
              </Grid>
            </MiniCard>
            <ImageForCall
              src={"./assets/images/francis.jpg"}
              alt=""
              sx={{
                top: { xs: 20, sm: 30 },
                right: { xs: 20, sm: 30 },
                height: { xs: "40px", sm: "80px" },
                width: { xs: "40px", sm: "80px" },
              }}
            />
            <Box
              sx={{
                top: { xs: 20, sm: 30 },
                left: { xs: 20, sm: 30 },
                // height: { xs: "40px", sm: "80px" },
                // width: { xs: "40px", sm: "80px" },
                position: "absolute",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ImageForCall
                src={"./assets/images/francis.jpg"}
                alt=""
                sx={{
                  height: { xs: "20px", sm: "40px" },
                  width: { xs: "20px", sm: "40px" },
                  borderRadius: "50%",
                  position: "relative",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "12px",
                  width: "fit-content",
                  whiteSpace: "wrap",
                  color: theme.palette.background.default,
                  fontWeight: 400,
                  marginLeft: "5px",
                }}
              >
                Dr. Billal
              </Typography>
            </Box>

            <ConsultationImage
              src={"./assets/images/consultant.png"}
              alt=""
              sx={{
                height: { xs: "250px", sm: "350px", md: "400px" },
                width: { xs: "300px", sm: "550px", md: "750px" },
              }}
            />
          </ImageContainer>
        </Box>
      </MainContainer>
    </>
  );
};

export default HeroComponent;
