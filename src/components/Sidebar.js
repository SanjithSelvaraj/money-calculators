import React from "react";
import {
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    // AppBar,
//   IconButton,
//   CssBaseline,
//   Tabs,
//   Tab,
//   Container,
//   TextField,
//   Button,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";





const Sidebar = ({ open, toggleDrawer, setSelectedTab }) => {

    const drawerWidth = 300;

    const onClickFuntion = (listItem, toggleDrawer, keyValue, setSelectedTab) => {
        toggleDrawer();
        setSelectedTab(keyValue);
    };

    return (
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
                <Box component="img" src="/images/rupee-logo.jpg" alt="Logo" sx={{ height: 40, marginRight: 2 }} />
                <Typography variant="h6">Money Calculators</Typography>
            </Toolbar>
            <List>
                {["SIP Calculator", "Step-Up SIP Calculator", "SIP Calculator with Inflation Adjustment", "Inflation Calculator", "Target SIP Calculator", "SWP Calculator", "SWP Calculator with Inflation Adjustment"].map((text, index) => (
                    <ListItem button key={index} onClick={() => onClickFuntion(text, toggleDrawer, index, setSelectedTab)}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
};

export default Sidebar;