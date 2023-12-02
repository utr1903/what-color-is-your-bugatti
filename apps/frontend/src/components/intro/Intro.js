import React, { Fragment } from "react";
import "./Intro.css";

const Intro = (props) => {
  return (
    <div className="intro">
      <p>
        Are you a doctor? Or an engineer? Maybe a lawyer? You have well-educated
        parents, you went to the greatest universities, had the best GPAs!
      </p>
      <p>
        You're cocky. You found yourself a job, you ain't no student no more.
        You earn more, you see more, you live more.
      </p>
      <p>
        You look at them highschool/college drop outs and you pity them. They
        ain't cultured as you, as successful as you, as charming as you, init?
      </p>
      <p>
        You wanna live in a big city in a huge apartment. You want your separete
        rooms for whatever hobbies you have, a huge balcony or maybe a terasse
        where you can grill.
      </p>
      <p>
        A ton of things to do & a ton of places to see in this world. Yet, you
        ain't going anywhere without calculating your bugdet for the next
        months...
      </p>
      <p>
        You want a raise, a better salary. You want promotion! You've been
        working hard after all. You know you're not like everyone. You had 3.8
        GPA from top universities, my friend.
      </p>
      <p>
        Though after a couple of years, you ain't there where you thought you'd
        be... You start not to feel so special like before. You look around you
        and see a lot people just like you.
      </p>
      <p>
        Though, you accomplished every task that is put in front of you... Now,
        you see them random people who never even started those tasks that
        you've nailed.
      </p>
      <p>
        Yet, they do travel to the places you wanted to travel, eat in the fine
        restaurants you wanted to eat, live in mansions you wanted to live...
      </p>
      <p>
        You do start hating `em, pal. You see them super cars, you gotta find
        something to despise these fuckers! Hold on... Who the fuck buys a{" "}
        {props.BUGATTI_VEYRON_COST} $ car with that fucking color?!
      </p>
      <p>
        With all the hatred throughout those years, you approach that fucker and
        say: "That's a fucking ugly color for such a beatiful car!"
      </p>
    </div>
  );
};

export default Intro;
