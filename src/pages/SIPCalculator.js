import React, { useState } from "react";
import { Typography, Box, TextField, Button, useMediaQuery, useTheme } from "@mui/material";

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState("");
    const [expectedReturn, setExpectedReturn] = useState("");
    const [duration, setDuration] = useState("");
    const [result, setResult] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const calculateSIP = () => {
        const P = parseFloat(monthlyInvestment);
        const r = parseFloat(expectedReturn) / 12 / 100;
        const n = parseFloat(duration) * 12;

        if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n <= 0) {
            setResult("Please enter valid positive values.");
            return;
        }
        if (r !== 0) {
            const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
            setResult(FV.toFixed(2));
        } else {
            const FV = P * n;
            setResult(FV.toFixed(2));
        }
    };

    return (
        <Box 
            p={isMobile ? 2 : 3} 
            boxShadow={3} 
            borderRadius={2} 
            maxWidth={isMobile ? "90%" : 400} 
            mx="auto"
            textAlign="center"
        >
            <Typography variant="h6" gutterBottom>
                SIP Calculator
            </Typography>
            <TextField
                label="Monthly Investment"
                fullWidth
                margin="normal"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                type="number"
                InputProps={{
                    inputProps: { step: 1000 }
                }}
            />
            <TextField
                label="Expected Return (%)"
                fullWidth
                margin="normal"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
                type="number"
            />
            <TextField
                label="Investment Duration (Years)"
                fullWidth
                margin="normal"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="number"
            />

            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={calculateSIP}
            > 
                Calculate
            </Button>
            
            {result !== null && (
                <Typography variant="h6" color="primary" mt={2}>
                    Returns: ₹{result}
                </Typography>
            )}
        </Box>
    );
};

export default SIPCalculator;
