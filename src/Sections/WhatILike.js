import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Section from "../Components/Section";
import Subsection from "../Components/Subsection";
import DividerText from "../Components/DividerText";

import globeEmoji from "../Images/globeemoji.png";
import videoGamesEmoji from "../Images/videogamesemoji.png";
import keyboardEmoji from "../Images/keyboardemoji.png";

import invader from "../Images/Logos/invader.png";
import leWagon from "../Images/Logos/legwagon.png";
import onDeck from "../Images/Logos/ondeck.png";

const AppExample = () => {
  return (
    <>
      <Section title={"what i like"} backgroundColor={"#F3F3F3"} id="whatILike">
        <Grid
          container
          xs={12}
          xl={8}
          alignItems="center"
          justify="center"
          direction="row"
        >
          <Subsection
            type="whatILike"
            title="On Deck"
            emoji={onDeck}
            subtitle="Founder's Fellowship, ODF11"
            content={[
              "founder community",
              "ideation support and testing",
              "hackathons, events",
            ]}
            callout="1st place: 2021 On Deck Hackathon"
            buttonLink="https://beondeck.com/founders"
          />
          <Subsection
            type="whatILike"
            title="HackerDAO"
            emoji={invader}
            subtitle="member, Block 3 cohort"
            content={[
              "sr. dev finishing school",
              "upskill web2 engineers to web3",
              "DAO governance, project funding",
            ]}
            callout="backed by: Coinbase, Xoogler Ventures"
            buttonLink="https://www.hackerdao.xyz"
          />

          <Subsection
            type="whatILike"
            title="Le Wagon"
            emoji={leWagon}
            subtitle="alumnus, mentor"
            content={[
              "full stack eng bootcamp",
              "alum, counselor to new grads",
              "cohort, post-grad counseling",
            ]}
            callout="1st place: final project, batch #297 (Tel Aviv)"
            buttonLink="https://www.lewagon.com/"
          />
        </Grid>
        <DividerText title="hobbies and interests" />
        <Grid
          container
          xs={9}
          xl={4}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <Typography
              item
              variant="h6"
              component="div"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginTop: "24px",
                marginBottom: "24px",
                fontWeight: "300",
              }}
            >
              crypto dev ⛓️ | video games 🎮 | eSports 🕹️ | games streaming and
              creators 📺 | electronic music production 🎹 | languages 🗣️ |
              scuba diving 🤿 | rowing 🚣‍♂️ | distance running 🏃‍♂️
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default AppExample;
