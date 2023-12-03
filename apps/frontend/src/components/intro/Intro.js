import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Intro = (props) => {
  return (
    <Container>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        Are you a doctor? Or an engineer? Maybe a lawyer? You have well-educated
        parents, you went to the greatest universities, had the best GPAs!
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        You're cocky. You found yourself a job, you ain't no student no more.
        You earn more, you see more, you live more.
      </Typography>

      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        You look at them highschool/college drop outs and you pity them. They
        ain't cultured as you, as successful as you, as charming as you, init?
      </Typography>

      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        You wanna live in a big city in a huge apartment. You want your separete
        rooms for whatever hobbies you have, a huge balcony or maybe a terasse
        where you can grill.
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        A ton of things to do & a ton of places to see in this world. Yet, you
        ain't going anywhere without calculating your bugdet for the next
        months...
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        You want a raise, a better salary. You want promotion! You've been
        working hard after all. You know you're not like everyone. You had 3.8
        GPA from top universities, my friend.
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        Though after a couple of years, you ain't there where you thought you'd
        be... You start not to feel so special like before. You look around
        yourself and see a lot people just like you.
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        Though, you accomplished every task that is put in front of you... Now,
        you see them random people who never even started those tasks that
        you've nailed.
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        Yet, they do travel to the places you wanted to travel, eat in the fine
        restaurants you wanted to eat, live in mansions you wanted to live...
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        You do start hating `em, pal. You see them super cars, you gotta find
        something to despise these fuckers! Hold on a second... There you see
        another one of `em getting out of his Bugatti. Who the fuck buys a{" "}
        {props.BUGATTI_VEYRON_COST} $ car with that fucking color?!
      </Typography>
      <Typography sx={{ color: "primary.text", flexGrow: 1, padding: "1%" }}>
        With all the hatred throughout those years, you approach that fucker and
        say:
      </Typography>
    </Container>
  );
};

export default Intro;
