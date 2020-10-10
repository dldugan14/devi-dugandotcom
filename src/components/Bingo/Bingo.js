import React from "react";
import useStyles from "./styles";
import words from "./Words";
import { useMediaQuery, Card } from "@material-ui/core";
import BingoItem from "./BingoItem";
import theme from "../../styles/theme";

const Itinerary = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  function fillCard() {
    const bingo = ["B", "I", "N", "G", "O"];
    const usedWords = [];

    return [...Array(30)].map((_, i) => {
      if (i <= 4) {
        return <BingoItem variant='TITLE' word={bingo[i]} key={bingo[i]} />;
      }
      if (i === 17) {
        return <BingoItem variant='FREE' word='Free' key='free' />;
      }

      let thisWord =
        words[Math.floor(Math.random() * Math.floor(words.length - 1)) + 1];
      while (usedWords.includes(thisWord)) {
        thisWord = words[Math.floor(Math.random() * words.length) + 1];
      }
      usedWords.push(thisWord);

      if (isMobile) {
      }

      return <BingoItem word={thisWord} key={thisWord} />;
    });
  }

  return <Card className={classes.container}>{fillCard()}</Card>;
};

export default Itinerary;
