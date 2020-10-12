import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "100%",
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns:
        "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ",
    },
    "& button": {
      border: "none",
      height: "1rem",
      width: "1rem",
      borderRadius: "1rem",
      marginLeft: "0.5rem",
      [theme.breakpoints.down("sm")]: {
        height: "0.5rem",
        width: "0.5rem",
        borderRadius: "0.25rem",
        marginLeft: "0.5rem",
        marginTop: "0.5rem",
      },
    },
  },
}));
