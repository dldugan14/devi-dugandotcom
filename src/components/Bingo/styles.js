import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    justifyItems: "center",
    justifyContent: "center",
  },
  bingoItem: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    height: "10vw",
    width: "100%",
  },
  title: {
    fontWeight: "900",
    fontSize: "7vw",
  },
  free: {
    fontWeight: "bold",
    fontSize: "2vw",
  },
  item: {
    fontSize: "2vw",
  },
}));
