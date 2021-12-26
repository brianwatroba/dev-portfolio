import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import Section from "../Components/Section";
import AppExample from "../Components/AppExample";
import Testimonial from "../Components/Testimonial";

import spyfallPhone from "../Images/spyfallphone.png";
import loveQuotesPhone from "../Images/lovequotesphone.png";
import tfyPhone from "../Images/tfyphone.png";
import pipelinePhone from "../Images/pipelinephone.png";
import lirolaPhone from "../Images/lirolaphone.png";
import chatjumpPhone from "../Images/chatjumpphone.png";

import jesseLirolaHeadshot from "../Images/jesselirola.jpg";
import honeyshanksHeadshot from "../Images/honeyshanks.png";
import day9Headshot from "../Images/day9headshot.png";

import nodeJsLogo from "../Images/Logos/nodejslogo.png";
import railsLogo from "../Images/Logos/railslogo.png";
import reactLogo from "../Images/Logos/reactlogo.jpg";
import bootstrapLogo from "../Images/Logos/bootstraplogotwo.png";
import redisLogo from "../Images/Logos/redislogo.png";
import ejsLogo from "../Images/Logos/ejslogo.png";
import postgresLogo from "../Images/Logos/postgreslogo.png";
import materialUiLogo from "../Images/Logos/materialuilogo.png";
import mongoDbLogo from "../Images/Logos/mongodblogo.png";
import herokuLogo from "../Images/Logos/herokulogofour.png";
import nextjsLogo from "../Images/Logos/nextjslogo.png";
import firebaseLogo from "../Images/Logos/firebaselogo.png";
import dockerLogo from "../Images/Logos/dockerlogo.png";
import tailwindLogo from "../Images/Logos/tailwindlogo.png";
import netlifyLogo from "../Images/Logos/netlifylogo.png";
import airtableLogo from "../Images/Logos/airtablelogo.png";
import styledComponentsLogo from "../Images/Logos/styledcomponentslogo.png";
import phaserLogo from "../Images/Logos/phaserlogo.jpeg";

const useStyles = makeStyles((theme) => ({
  appExampleDiv: {
    marginTop: theme.spacing(6),
  },
  mauNumber: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontFamily: "roboto",
  },
  mauText: {
    textAlign: "center",
    marginTop: theme.spacing(0),
    color: "#989898",
    fontFamily: "open sans",
  },
  ownershipTitle: {
    borderRadius: "4px",
    display: "flex",
    color: "#B0B0B0",
    alignItems: "center",
    justfiyContent: "center",
    fontWeight: 900,
    fontFamily: "roboto",
    marginBottom: theme.spacing(1),
  },
  emoji: {
    width: "30px",
    marginRight: theme.spacing(1),
  },
  divider: {
    width: "150px",
    height: "2px",
    backgroundColor: "#808080",
  },
}));

const WhatIBuild = () => {
  const classes = useStyles();

  return (
    <Section title={"what i build"} backgroundColor={"#FFFFFF"} id="whatIBuild">
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          ></div>
        </Grid>
        <Grid item className={classes.mauText}>
          <Typography variant={"h2"} className={classes.mauNumber}>
            150K
          </Typography>
          <Typography variant={"h5"}>monthly active users</Typography>
          <Typography variant={"h7"}>across all original apps</Typography>
        </Grid>

        <Grid
          container
          alignContent="center"
          direction="row"
          xs={12}
          xl={8}
          className={classes.appExampleDiv}
        >
          <AppExample
            title={"spyfall"}
            subtitleOne={"'whodunnit' digital board game"}
            subtitleTwo={`"a great party game" - `}
            subtitleTwoLinkText={"Tech Radar"}
            subtitleTwoLinkHref="https://www.techradar.com/how-to/how-to-play-spyfall-online"
            buttonLink={"https://www.spyfall.app"}
            phoneImage={spyfallPhone}
            logos={[
              railsLogo,
              redisLogo,
              postgresLogo,
              bootstrapLogo,
              herokuLogo,
            ]}
          />

          <AppExample
            title={"texts from yourself"}
            subtitleOne={"sms-based journaling app"}
            subtitleTwo={`"easy self care, love it!" - `}
            subtitleTwoLinkText={"user"}
            buttonLink={"https://www.textsfromyourself.app"}
            phoneImage={tfyPhone}
            logos={[
              reactLogo,
              nodeJsLogo,
              mongoDbLogo,
              materialUiLogo,
              herokuLogo,
            ]}
          />
          <AppExample
            title={"love quotes only"}
            subtitleOne={"largest online love quotes library"}
            subtitleTwo={`"where I find my IG captions" - `}
            subtitleTwoLinkText={"user"}
            buttonLink={"https://www.lovequotesonly.com"}
            phoneImage={loveQuotesPhone}
            logos={[
              ejsLogo,
              nodeJsLogo,
              mongoDbLogo,
              bootstrapLogo,
              herokuLogo,
            ]}
          />
        </Grid>
        <div>
          <Typography
            component="div"
            variant="h5"
            className={classes.ownershipTitle}
          >
            other contributions
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className={classes.divider} />
          </div>
        </div>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
          direction="row"
          xs={12}
          md={8}
          lg={8}
          xl={8}
          className={classes.appExampleDiv}
        >
          <AppExample
            title={"chat jump"}
            subtitleOne={"game for twitch streamers"}
            subtitleTwo={"1st place - On Deck Hackathon (2021)"}
            buttonLink={"https://www.chatjump.gg"}
            phoneImage={chatjumpPhone}
            logos={[reactLogo, phaserLogo, nodeJsLogo, mongoDbLogo, herokuLogo]}
          />
          <Testimonial
            quote="“oh my god, this is so clever. it's unbelievably #$^*ing sick. i can interact with my stream chat as i play. this is such a cute idea. this is how it's done, man.”"
            author="sean plott (day9)"
            title="famous streamer"
            avatar={day9Headshot}
          />
          <AppExample
            title={"pipeline.gg"}
            subtitleOne={"learn to livestream like a pro"}
            subtitleTwo={`"helping streamers stand out" - `}
            subtitleTwoLinkText={"Forbes"}
            subtitleTwoLinkHref="https://www.forbes.com/sites/paultassi/2019/04/22/if-you-want-to-stream-video-games-for-a-living-start-up-pipeline-says-it-can-show-you-how/?sh=2e01ea8b5195"
            buttonLink={"https://www.pipeline.gg"}
            phoneImage={pipelinePhone}
            logos={[
              nextjsLogo,
              firebaseLogo,
              postgresLogo,
              dockerLogo,
              tailwindLogo,
            ]}
          />
          <Testimonial
            quote="“for our app relaunch, we acheived a level of polish that couldn’t
						have happened without Brian. we’re super appreciative of the
						timeliness and cleanliness of the code he committed.”"
            author="jason chen"
            title="cto, pipeline"
            avatar={honeyshanksHeadshot}
          />
          <AppExample
            title={"lirola phone"}
            subtitleOne={"retro phone simulator"}
            subtitleTwo={`"super edgy and fresh" - `}
            subtitleTwoLinkText={"Jesse Lirola"}
            buttonLink={"https://www.liro.la"}
            phoneImage={lirolaPhone}
            logos={[
              reactLogo,
              nodeJsLogo,
              airtableLogo,
              styledComponentsLogo,
              netlifyLogo,
            ]}
          />
          <Testimonial
            quote="“i wanted a fresh, edgy take on a photography portfolio site, and brian brought my ideas to life--and then some. he's a super talented developer with a sharp eye for design.”"
            author="jesse lirola"
            title="photographer"
            avatar={jesseLirolaHeadshot}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default WhatIBuild;
