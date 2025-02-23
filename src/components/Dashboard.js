import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  // Drawer,
  // List,
  // ListItem,
  // ListItemText,
  IconButton,
  Box,
  CssBaseline,
  Tabs,
  Tab,
  Container,
  TextField,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import SIPCalculator from "../pages/SIPCalculator";

// const drawerWidth = 300;

// const onClickFuntion = (listItem, toggleDrawer, keyValue, setSelectedTab) => {
//   toggleDrawer();
//   setSelectedTab(keyValue);
// };

// const Sidebar = ({ open, toggleDrawer, setSelectedTab }) => (
//   <Drawer
//     variant="temporary"
//     open={open}
//     onClose={toggleDrawer}
//     sx={{
//       width: drawerWidth,
//       flexShrink: 0,
//       [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
//     }}
//   >
//     <Toolbar>
//       <Box component="img" src="/images/rupee-logo.jpg" alt="Logo" sx={{ height: 40, marginRight: 2 }} />
//       <Typography variant="h6">Money Calculators</Typography>
//     </Toolbar>
//     <List>
//       {["SIP Calculator", "Step-Up SIP Calculator", "SIP Calculator with Inflation Adjustment", "Inflation Calculator", "Target SIP Calculator", "SWP Calculator", "SWP Calculator with Inflation Adjustment"].map((text, index) => (
//         <ListItem button key={index} onClick={() => onClickFuntion(text, toggleDrawer, index, setSelectedTab)}>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//   </Drawer>
// );

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

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
            Money Calculators
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} toggleDrawer={toggleDrawer}  setSelectedTab={setSelectedTab}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Financial Calculators
          </Typography>
          <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)} variant="scrollable" scrollButtons="auto">
            {["SIP Calculator", "Step-Up SIP Calculator", "SIP Calculator with Inflation Adjustment", "Inflation Calculator", "Target SIP Calculator", "SWP Calculator", "SWP Calculator with Inflation Adjustment"].map((calc, index) => (
              <Tab key={index} label={calc} />
            ))}
          </Tabs>
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
