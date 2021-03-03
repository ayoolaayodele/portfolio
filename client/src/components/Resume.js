import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  // mainContainer: {
  //   background: '#000080',
  // },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component='header' className={classes.mainContainer}>
        <Typography variant='h4' align='center' className={classes.heading}>
          Work Experience
        </Typography>
        <Box component='div' className={classes.timeLine}>
          <Typography
            variant='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              HTML, CSS & javascript
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: "tomato" }}
            >
              Freelancer
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: "white" }}
            >
              This is a google-clone built with React, contextAPI to manage the
              state, MaterialUI for all the icons, React-router to navigate to
              other pages, Google-custom search API where we pull live
              information from and firebase hosting to deploy the app.
            </Typography>
          </Box>
          <Typography
            variant='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              react | redux
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: "tomato" }}
            >
              Freelancer
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: "white" }}
            >
              Built social network application using technologies like React,
              Redux for state management, node js, and mongo DB
            </Typography>
          </Box>
          <Typography
            variant='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019 - 2020
          </Typography>
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              react
            </Typography>
            <Typography
              variant='body1'
              align='center'
              style={{ color: "tomato" }}
            >
              Freelancer
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              style={{ color: "white" }}
            >
              Built instagram clone using react, firebase for its database,
              authentication and hosting
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
