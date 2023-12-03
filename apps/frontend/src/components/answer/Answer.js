import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import "./Answer.css";

import gif from "./tate.gif";

const Answer = (props) => {
  // Is yelled?
  const [isYelled, setIsYelled] = useState(false);
  const yellButtonClicked = () => {
    setIsYelled(true);
  };

  // Has shut up?
  const [hasShutUp, setHandleHasShutUp] = useState(false);
  const shutUpButtonClicked = () => {
    // setIsYelled(false);
    setHandleHasShutUp(true);
    props.handleHasShutUp();
  };

  return (
    <Container>
      {!isYelled && (
        <Box marginLeft="20%" marginRight="20%">
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
            onClick={yellButtonClicked}
          >
            That's a fucking ugly color for such a beatiful car !!!
          </Button>
        </Box>
      )}
      {isYelled && !hasShutUp && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            component="img"
            sx={{
              width: "40%",
            }}
            alt="What color is your Bugatti?"
            src={gif}
          />
        </Box>
      )}
      {isYelled && !hasShutUp && (
        <Box marginTop="2%" marginLeft="20%" marginRight="20%">
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
            onClick={shutUpButtonClicked}
          >
            Oh, shut the fuck up! Let's continue!
          </Button>
        </Box>
      )}
      {hasShutUp && (
        <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
          That dense douchebag... Nevermind, now you know that you really gotta
          need to own a Bugatti as well! You know your salary. You can calculate
          when you gonna get one. Let's fucking GO!
        </Typography>
      )}
    </Container>
  );
};

export default Answer;
