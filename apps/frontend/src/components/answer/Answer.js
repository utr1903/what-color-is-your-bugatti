import React, { Fragment, useState } from "react";

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
    setIsYelled(false);
    setHandleHasShutUp(true);
    props.handleHasShutUp();
  };

  return (
    <div className="answer">
      {!isYelled && (
        <button type="submit" onClick={yellButtonClicked}>
          That's a fucking ugly color for such a beatiful car !!!
        </button>
      )}
      {isYelled && <img src={gif} alt="" />}
      {hasShutUp && (
        <p>
          That dense douchebag... Nevermind, now you know that you really gotta
          need to own a Bugatti as well! You know your salary. You can calculate
          when you gonna get one. Let's fucking GO!
        </p>
      )}
      {isYelled && (
        <button type="submit" onClick={shutUpButtonClicked}>
          Oh, shut the fuck up! Let's continue!
        </button>
      )}
    </div>
  );
};

export default Answer;
