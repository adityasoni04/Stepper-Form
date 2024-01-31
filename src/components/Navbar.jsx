import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333', zIndex: 1000 }}>
      <Toolbar>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "'Pacifico', cursive", 
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Logo
        </Typography>

        <div style={{ flexGrow: 1 }} /> 
        <Typography
          variant="h6"
          noWrap
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, alignItems: 'center' }}
        >
          Hi, User!
          <AccountCircleIcon sx={{ marginLeft: 1 }} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
