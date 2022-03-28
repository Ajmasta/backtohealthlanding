import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../BacktoHealthLogo.png";
import checklist from "../Checklist.png";
import calendar from "../calendar.png";
import chart from "../chart.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Solution = () => {
  const height = useMediaQuery("(min-height:800px)") ? "850px" : "750px";
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        minHeight: `${height}`,
        backgroundColor: "rgb(1,159,222)",
        paddingBottom: "50px",
        display: "flex",
      }}
      alignContent="center"
      alignItems="center"
      justify="center"
      direction="row"
      wrap="wrap"
      id="solution"
    >
      <Grid container item direction="column">
        <h1 style={{ fontSize: "3rem", letterSpacing: "5px", color: "white" }}>
          {" "}
          Our Solution
        </h1>
      </Grid>
      <Grid container item lg={12} xs={10}>
        <Grid
          item
          xs={12}
          lg={4}
          container
          alignContent="center"
          justify="center"
          style={{ color: "black" }}
        >
          <Grid item xs={12}>
            <h1>
              <span style={{ color: "antiquewhite" }}>1 |</span> Evaluate
            </h1>{" "}
          </Grid>
          <Grid item xs={12}>
            <img alt="checklist" height="150px" src={checklist}></img>
          </Grid>
          <Grid item xs={10} style={{ alignText: "center" }}>
            <p> Evaluate your pain and receive a customized program.</p>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          container
          alignContent="center"
          alignItems="center"
          justify="center"
          style={{ color: "black" }}
        >
          <h1>
            {" "}
            <span style={{ color: "antiquewhite" }}> 2 | </span> Start
          </h1>
          <Grid item xs={12}>
            <img alt="checklist" height="150px" src={calendar}></img>
          </Grid>
          <Grid item xs={10} style={{ alignText: "center" }}>
            <p> Our scientific-based program adjusts to your needs.</p>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          container
          alignContent="center"
          justify="center"
          style={{ color: "black" }}
        >
          <Grid item xs={12}>
            <h1>
              <span style={{ color: "antiquewhite" }}>3 | </span>Track
            </h1>
          </Grid>
          <Grid item xs={12}>
            <img alt="checklist" height="150px" src={chart}></img>
          </Grid>
          <Grid item xs={10} style={{ alignText: "center" }}>
            <p>Understand how your pain evolves and how to reduce it.</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Solution;
