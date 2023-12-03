import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Answer from "./components/answer/Answer";
import Intro from "./components/intro/Intro";
import Salary from "./components/salary/Salary";
import Summary from "./components/summary/Summary";

import "./App.css";

const BUGATTI_VEYRON_COST = 2000000;

function App() {
  // Has shut up?
  const [hasShutUp, setHandleHasShutUp] = useState(false);
  const handleHasShutUp = () => {
    setHandleHasShutUp(true);
  };

  // Is form submitted?
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleIsFormSubmitted = () => {
    setIsFormSubmitted(true);
  };

  // Salary
  const [salaries, setSalaries] = useState("");
  const handleSalaries = (salaries) => {
    setSalaries(salaries);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="sticky">
        <Typography
          variant="h2"
          sx={{ color: "white", flexGrow: 1, marginLeft: "5%", padding: "1%" }}
        >
          The Ugly Truth
        </Typography>
      </AppBar>
      <Grid alignItems="flex-start" container spacing={0}>
        <Grid container direction="row" item xs={12} spacing={0}>
          <Grid item xs={3} style={{ border: "1px solid black" }}></Grid>
          <Grid
            item
            xs={6}
            sx={{
              paddingBottom: "5%",
              border: "1px solid black",
              backgroundColor: "primary.background",
            }}
          >
            <Intro BUGATTI_VEYRON_COST={BUGATTI_VEYRON_COST} />
            <Answer handleHasShutUp={handleHasShutUp} />
            {hasShutUp && (
              <Salary
                BUGATTI_VEYRON_COST={BUGATTI_VEYRON_COST}
                handleIsFormSubmitted={handleIsFormSubmitted}
                handleSalaries={handleSalaries}
              />
            )}
            {isFormSubmitted && (
              <Summary
                BUGATTI_VEYRON_COST={BUGATTI_VEYRON_COST}
                salaries={salaries}
              />
            )}
          </Grid>
          <Grid item xs={3} style={{ border: "1px solid black" }}></Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
