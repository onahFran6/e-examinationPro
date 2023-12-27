import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const LoginHeader = () => {
  return (
    <>
      <AppBar sx={{ height: "100%", margin: 0, padding: 0 }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ color: "black", fontSize: 24 }}
            aria-label="menu"
            size="large"
          >
            <MoreHorizIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default LoginHeader;
