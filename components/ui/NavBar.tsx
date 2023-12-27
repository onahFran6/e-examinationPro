"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTheme } from "@mui/material/styles";

import { useRouter } from "next/navigation";
import { navBarListData } from "../../constant/NavbarListData";

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const router = useRouter();
  const theme = useTheme();

  // function to handle login button and redirect to login page
  const handleLoginButton = async () => {
    router.push(`/login`);
    return null;
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        // backgroundColor: "linear-gradient(88deg, #C5F3FF 0%, #D6F7FF 100%)", // "#EADEFE",
        boxShadow: "none",
      }}
    >
      <Container sx={{ width: "100%" }}>
        <Toolbar disableGutters>
          {/* big screen */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "satoshi",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CONSULTO
          </Typography>

          {/* navbar small screen   */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                backgroundColor: "transparent",
              }}
            >
              {navBarListData.map((page) => (
                <MenuItem
                  sx={{
                    backgroundColor: "#EADEFE",
                    "&:hover": {
                      backgroundColor: "#F6D2BB",
                    },
                  }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  {page}
                </MenuItem>
              ))}

              <MenuItem
                sx={{
                  display: { xs: "block", md: "none" },
                  backgroundColor: "#EADEFE",
                  "&:hover": {
                    backgroundColor: "#F6D2BB",
                  },
                }}
                onClick={handleLoginButton}
              >
                Sign up
              </MenuItem>
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            // variant="h5"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "satoshi",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "20px",
            }}
          >
            CONSULTO
          </Typography>

          {/* navbar large screen   */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navBarListData.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#303169",
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#F6D2BB",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* login sign in  */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="">
              <Box sx={{ display: "flex", mr: { xs: 0, sm: 4 } }}>
                <Button
                  sx={{
                    backgroundColor: {
                      xs: theme.palette.primary.main,
                      sm: "inherit",
                    },
                    borderRadius: "20px",
                    fontSize: "12px",
                    color: {
                      xs: theme.palette.background.default,
                      sm: theme.palette.primary.main,
                    },
                    "&:hover": {
                      bgcolor: theme.palette.primary.light,
                    },
                  }}
                  onClick={() => handleLoginButton()}
                >
                  Log in
                </Button>
                <Button
                  sx={{
                    display: { xs: "none", md: "block" },

                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "20px",
                    fontSize: "12px",
                    color: theme.palette.background.default,
                    "&:hover": {
                      bgcolor: theme.palette.primary.light,
                    },
                  }}
                  onClick={() => handleLoginButton()}
                >
                  Sign Up
                </Button>
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
