import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  buttonContainer: {
    gridColumn: "1 / 3",
    color: theme.palette.text.primary,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& :last-child": {
      marginLeft: "2rem",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0.5rem",
      },
    },
  },
}));
