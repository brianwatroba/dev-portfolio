import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    sectionDiv: {
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: theme.spacing(8),
        position: "relative",
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: theme.spacing(6),
        marginTop: theme.spacing(-4),
        position: "relative",
    },
    title: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(8),
        paddingLeft: theme.spacing(8),
        borderRadius: "25px 25px 10px 10px",
        display: "inline-block",
        color: "#ffffff",
        border: "5px solid #ffffff",
        position: "relative",
        zIndex: "5",
        fontWeight: "400",
    },
}));

const Section = (props) => {
    const classes = useStyles();
    const { title, backgroundColor, id } = props;
    return (
        <>
            <div className={classes.sectionDiv} style={{ backgroundColor }}>
                <div className={classes.titleContainer} id={id}>
                    <Typography
                        variant={"h6"}
                        className={classes.title}
                        style={{ backgroundColor: "#626262" }}
                        component="div"
                    >
                        {title}
                    </Typography>
                </div>
                {props.children}
            </div>
        </>
    );
};

export default Section;
