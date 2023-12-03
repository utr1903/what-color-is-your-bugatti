import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import "./Summary.css";

import gif from "./goggins.gif";

const Summary = (props) => {
  const BUGATTI_VEYRON_COST = props.BUGATTI_VEYRON_COST;

  const yearsWithSavings = props.salaries.salaryArraySavings.length - 1;
  let yearsWithNet = 0;
  let yearsWithBrutto = 0;

  for (let year = 0; year < yearsWithSavings; year++) {
    const salaryNet = props.salaries.salaryArrayNet[year];
    const salaryBrutto = props.salaries.salaryArrayBrutto[year];

    if (yearsWithNet < Number.EPSILON && salaryNet > BUGATTI_VEYRON_COST) {
      yearsWithNet = year;
    }
    if (
      yearsWithBrutto < Number.EPSILON &&
      salaryBrutto > BUGATTI_VEYRON_COST
    ) {
      yearsWithBrutto = year;
    }
  }

  const [doTheyKnowYou, setDoTheyKnowYou] = useState(false);
  const theyDontKnowMeSonButtonClicked = () => {
    setDoTheyKnowYou(true);
  };

  return (
    <Container>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        Your yearly brutto salary is {props.salaries.salaryArrayBrutto[0]} $.
        You probably need to pay 30-40% income tax. Let's assume the max,
        meaning you're net yearly salary is {props.salaries.salaryArrayNet[0]}{" "}
        $. Well, you gotta pay the bills and eat to survive. Let's say, you save
        30% of your net salary, meaning that you save{" "}
        {props.salaries.salaryArraySavings[0]} $ per year!
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        Mate... You gonna own a Bugatti in
        <Box fontWeight="bold" display="inline">
          {" "}
          {yearsWithSavings}{" "}
        </Box>
        years! If you don't pay any bills and eat nothing, you gonna need
        <Box fontWeight="bold" display="inline">
          {" "}
          {yearsWithNet}
        </Box>
        ! If you say
        <Box fontStyle="italic" display="inline">
          {" "}
          "Fuck the IRS! I ain't paying no taxes!"
        </Box>{" "}
        You still have
        <Box fontWeight="bold" display="inline">
          {" "}
          {yearsWithBrutto}{" "}
        </Box>
        years to go, pal...
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        You ain't late for anything! Life ain't easy, and now you're aware that
        you ain't getting anywhere with the way you go!
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        <Box fontWeight="bold" display="inline">
          Time to fucking change, son!
        </Box>
      </Typography>

      <Box marginLeft="20%" marginRight="20%">
        {!doTheyKnowYou && (
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: "inherit",
              color: "button.text",
              backgroundColor: "button.background",
              "&:hover": { backgroundColor: "button.hoverBackground" },
            }}
            fullWidth
            onClick={theyDontKnowMeSonButtonClicked}
          >
            DO THEY FUCKING KNOW YOU?!
          </Button>
        )}
        {doTheyKnowYou && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="What color is your Bugatti?"
              src={gif}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Summary;
