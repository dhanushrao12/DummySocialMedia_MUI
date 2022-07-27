import React, { useState } from "react";

import { Interests, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.light.main,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="primary">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Dhanush
        </Typography>
        <Interests
          color="light"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="secondary">
            <Mail color="light" />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <Notifications color="light" />
          </Badge>
          <Avatar
            onClick={(e) => {
              setOpen(!open);
            }}
            src="https://www.kindpng.com/picc/m/151-1510104_computer-science-clip-art-hd-png-download.png"
            sx={{ width: 30, height: 30 }}
          />
        </Icons>
        <Userbox
          onClick={(e) => {
            setOpen(!open);
          }}
        >
          <Avatar
            src="https://www.kindpng.com/picc/m/151-1510104_computer-science-clip-art-hd-png-download.png"
            sx={{ width: 30, height: 30 }}
          />
          {/* <Typography variant="span">Dhanush</Typography> */}
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(!open);
        }}
        anchorOrigin={{
          margin: "0px 40px 40px 40px",
          vertical: "top",
          horizontal: "right",
          padding: "20px",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
