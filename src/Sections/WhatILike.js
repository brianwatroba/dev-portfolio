import React from "react";
import { Grid } from "@material-ui/core";

import Section from "../Components/Section";
import Subsection from "../Components/Subsection";

import globeEmoji from "../Images/globeemoji.png";
import videoGamesEmoji from "../Images/videogamesemoji.png";
import keyboardEmoji from "../Images/keyboardemoji.png";

const AppExample = () => {
    return (
        <>
            <Section
                title={"what i like"}
                backgroundColor={"#F3F3F3"}
                id="whatILike"
            >
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
                        title="eSports"
                        emoji={videoGamesEmoji}
                        subtitle="overwatch, fortnite"
                        content={[
                            "Corporate eSports Association",
                            "Facebook A-Team player",
                            "3100 SR competitive",
                            `4th place '19, 3rd place '20 `,
                        ]}
                        buttonLink="https://cea.gg/"
                    />
                    <Subsection
                        type="whatILike"
                        title="music production"
                        emoji={keyboardEmoji}
                        subtitle="electronic, remixes"
                        content={[
                            "full suite production",
                            "Ableton Live, Serum, Massive",
                            "arrangement, mastering",
                            "soundcloud",
                        ]}
                        buttonLink="https://soundcloud.com/brianwatroba"
                    />
                    <Subsection
                        type="whatILike"
                        title="languages"
                        emoji={globeEmoji}
                        subtitle="chinese, spanish"
                        content={[
                            "full professional fluency",
                            "US State Department alum",
                            "Middlebury Language School",
                            "3+ years abroad: China, Spain",
                        ]}
                        buttonLink="https://www.linkedin.com/in/brian-watroba-649a93b0/"
                    />
                </Grid>
            </Section>
        </>
    );
};

export default AppExample;
