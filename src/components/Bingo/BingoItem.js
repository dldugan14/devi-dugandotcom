import React, { useState } from "react";
import theme from "../../styles/theme";
import useStyles from "./styles";

export default function BingoItem(props) {
  const { word, variant } = props;
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  function getClassName() {
    switch (variant) {
      case "TITLE":
        return classes.title;
      case "FREE":
        return classes.free;
      default:
        return classes.item;
    }
  }

  function changeColor() {
    if (variant !== "TITLE") setSelected(!selected);
  }

  return (
    <div
      className={classes.bingoItem}
      style={{
        backgroundColor: selected ? theme.palette.colors.tertiary : "white",
      }}
      onClick={changeColor}
    >
      <span className={getClassName()}>{word}</span>
    </div>
  );
}
