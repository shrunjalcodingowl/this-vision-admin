import React from "react";
import FeatherIcon from "feather-icons-react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
// Dropdown Component
import SearchDD from "./SearchDD";
import ProfileDD from "./ProfileDD";
import CartDropdown from "./CartDropdown";
import MessageDropdown from "./MessageDropdown";
import NotificationDropdown from "./NotificationDropdown";

const Header = ({
  sx,
  customClass,
  toggleSidebar,
  toggleMobileSidebar,
  position,
}) => {
  return (
    <AppBar sx={sx} position={position} elevation={0} className={customClass}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          size="large"
          sx={{
            display: {
              lg: "flex",
              xs: "none",
            },
          }}
        >
          <FeatherIcon icon="menu" />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <FeatherIcon icon="menu" width="20" height="20" />
        </IconButton>
      
        <Box flexGrow={1} />
        

        {/* ------------------------------------------- */}
        {/* Profile Dropdown */}
        {/* ------------------------------------------- */}
        <ProfileDD />
        {/* ------------------------------------------- */}
        {/* Profile Dropdown */}
        {/* ------------------------------------------- */}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  position: PropTypes.string,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Header;
