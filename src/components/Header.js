import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import image from "../assets/images/conrado.png";

const style = {
  section: {
    width: "100%",
    height: "90vh",
    border: "1px solid red",
    display: "flex",
    flexDirection: "row"
  },
  boxLeft: {
    position: "relative",
    width: "40%",
    border: "1px solid blue"
  },
  boxRight: {
    position: "relative",
    width: "60%",
    border: "1px solid green"
  },
  image: {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "100%",
    maxWidth: "100%",
    height: "auto"
  }
};

export default function Header() {
  return (
    <>
      <section style={style.section}>
        <div style={style.boxLeft}>
          <Typography variant="h1" component="h1">
            h1 heading
          </Typography>
          <Typography variant="h3" component="h3">
            h3 cos tam
          </Typography>
        </div>
        <div style={style.boxRight}>
          <img style={style.image} src={image} alt={"Conrado"} />
        </div>
      </section>
    </>
  );
}
