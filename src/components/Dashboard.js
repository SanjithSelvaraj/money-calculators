import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 300;

const onClickFuntion = (listItem,toggleDrawer) => {
  toggleDrawer();
  // alert(listItem);
}

const Sidebar = ({ open,toggleDrawer }) => (
  <Drawer 
    variant="temporary"
    open={open}
    onClose={toggleDrawer}
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
    }}
  >
    <Toolbar>
        {/* Logo */}
        <Box
          component="img"
          src="/images/rupee-logo.jpg" // Replace with your logo path
          alt="Logo"
          sx={{ height: 40, marginRight: 2 }}
        />
        
        {/* App Name */}
        <Typography variant="h6">
          Money Calculators
        </Typography>
      </Toolbar>
    <List>
      {["SIP Calculator", "SWP Calculator", "About"].map((text) => (
        <ListItem button key={text} onClick={() => onClickFuntion(text,toggleDrawer)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Calculators
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h4">Welcome to the Dashboard</Typography>


      </Box>
    </Box>
  );
};

export default Dashboard;
