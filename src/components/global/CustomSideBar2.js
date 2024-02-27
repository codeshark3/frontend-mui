import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BiotechIcon from "@mui/icons-material/Biotech";

const CustomSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (link) => {
    //  setSelected(title);
    navigate(link);
  };

  return (
    <>
      <Button onClick={toggleSidebar}>Open drawer</Button>
      <Drawer anchor="left" open={!isCollapsed} onClose={toggleSidebar}>
        <List>
          {/* <ListItemIcon>
          <MenuOutlinedIcon />
        </ListItemIcon> */}
          {/* MENU ITEMS */}
          <ListItem onClick={toggleSidebar}>
            <ListItemText>
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color="textPrimary">
                    ADMIN
                  </Typography>
                  <IconButton>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </ListItemText>
          </ListItem>

          {/* USER INFO */}
          {!isCollapsed && (
            <ListItem>
              {/* USER PROFILE */}
              <Box textAlign="center" width="100%">
                <Typography
                  variant="h2"
                  color="textPrimary"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color="green" sx={{ m: 0 }}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </ListItem>
          )}

          {/* MENU ITEMS */}
          <ListItem onClick={() => handleItemClick("/")}>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem onClick={() => handleItemClick("/tests")}>
            <ListItemIcon>
              <BiotechIcon />
            </ListItemIcon>
            <ListItemText primary="Tests" />
          </ListItem>

          {/* Add more menu items as needed */}
        </List>
      </Drawer>
    </>
  );
};

export default CustomSidebar;
