import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  CssBaseline,
  Tabs,
  Tab,
  Container,
  TextField,
  Button,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import SIPCalculator from "../pages/SIPCalculator";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      
      {/* Responsive AppBar */}
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Financial Calculators
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Responsive Sidebar */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        variant={isMobile ? "temporary" : "permanent"}
        sx={{
          width: isMobile ? "auto" : 240,
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        <Sidebar open={open} toggleDrawer={toggleDrawer} setSelectedTab={setSelectedTab} />
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom align="center">
            Financial Calculators
          </Typography>

          {/* Responsive Tabs */}
          <Tabs
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            {[
              "SIP Calculator",
              "Step-Up SIP Calculator",
              "SIP Calculator with Inflation Adjustment",
              "Inflation Calculator",
              "Target SIP Calculator",
              "SWP Calculator",
              "SWP Calculator with Inflation Adjustment",
            ].map((calc, index) => (
              <Tab key={index} label={calc} />
            ))}
          </Tabs>

          {/* Tab Content */}
          <Box mt={3}>
            {selectedTab === 0 && <SIPCalculator />}
            {selectedTab === 1 && <StepUpSIPCalculator />}
            {selectedTab === 2 && <SIPWithInflationCalculator />}
            {selectedTab === 3 && <InflationCalculator />}
            {selectedTab === 4 && <TargetSIPCalculator />}
            {selectedTab === 5 && <SWPCalculator />}
            {selectedTab === 6 && <SWPWithInflationCalculator />}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};



const StepUpSIPCalculator = () => (
  <Box>
    <Typography variant="h6">Step-Up SIP Calculator</Typography>
    <TextField label="Initial Investment" fullWidth margin="normal" />
    <TextField label="Step-Up Percentage" fullWidth margin="normal" />
    <Button variant="contained" color="primary">Calculate</Button>
  </Box>
);

const SIPWithInflationCalculator = () => (
  <Box>
    <Typography variant="h6">SIP Calculator with Inflation Adjustment</Typography>
    <TextField label="Inflation Rate (%)" fullWidth margin="normal" />
    <Button variant="contained" color="primary">Calculate</Button>
  </Box>
);

const InflationCalculator = () => (
  <Box>
    <Typography variant="h6">Inflation Calculator</Typography>
    <TextField label="Current Value" fullWidth margin="normal" />
    <TextField label="Inflation Rate (%)" fullWidth margin="normal" />
    <Button variant="contained" color="primary">Calculate</Button>
  </Box>
);

const TargetSIPCalculator = () => (
  <Box>
    <Typography variant="h6">Target SIP Calculator</Typography>
    <TextField label="Target Amount" fullWidth margin="normal" />
    <TextField label="Investment Duration" fullWidth margin="normal" />
    <Button variant="contained" color="primary">Calculate</Button>
  </Box>
);

const SWPCalculator = () => (
  <Box>
    <Typography variant="h6">SWP Calculator</Typography>
    <TextField label="Monthly Withdrawal" fullWidth margin="normal" />
    <Button variant="contained" color="primary">Calculate</Button>
  </Box>
);

const SWPWithInflationCalculator = () => (
  <Box>
    <Typography variant="h6">SWP Calculator with Inflation Adjustment</Typography>
    <TextField label="Inflation Rate (%)" fullWidth margin="normal" />
    <Button variant="contained" color="primary">Calculate</Button>
  </Box>
);

export default Dashboard;
