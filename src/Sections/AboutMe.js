import React from "react";
import { Grid } from "@material-ui/core";

import Section from "../Components/Section";
import Subsection from "../Components/Subsection";
import nextJsLogo from "../Images/Logos/nextjslogo.png";
import nodeJsLogo from "../Images/Logos/nodejslogo.png";
import railsLogo from "../Images/Logos/railslogo.png";
import reactLogo from "../Images/Logos/reactlogo.jpg";
import reactNativeLogo from "../Images/Logos/reactNativeLogo.png";
import chewyLogo from "../Images/Logos/chewylogo.png";
import dentsuLogo from "../Images/Logos/dentsutwo.jpg";
import gmLogo from "../Images/Logos/gmlogo.png";
import microsoftLogo from "../Images/Logos/microsoftlogo.png";
// import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
    return (
        <Section title={"about me"} backgroundColor={"#F3F3F3"} id="aboutMe">
            <Grid
                container
                xs={12}
                alignItems="center"
                justify="center"
                direction="row"
            >
                <Subsection
                    type="aboutMe"
                    title="engineer"
                    subtitle="freelance"
                    content={[
                        "full stack",
                        "web + native",
                        "TS/JS, Ruby, Python",
                        "consumer, games",
                    ]}
                    cardTitle="i work in"
                    cardLogos={[
                        nextJsLogo,
                        reactNativeLogo,
                        nodeJsLogo,
                        railsLogo,
                    ]}
                />
                <Subsection
                    type="aboutMe"
                    title="marketer"
                    subtitle="facebook inc."
                    content={[
                        "brand partnerships",
                        "$50M+ in yearly revenue",
                        "ad conception + launch",
                        "digital native, eComm",
                    ]}
                    cardTitle="i work with"
                    cardLogos={[microsoftLogo, gmLogo, chewyLogo, dentsuLogo]}
                />
            </Grid>
        </Section>
    );
};

export default AboutMe;
