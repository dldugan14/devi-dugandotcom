import React from "react";
import Section from "../components/Section";
import Triangle from "../components/Triangle";
import Bingo from "../components/Bingo/Bingo";

const Background = () => (
  <div>
    <Triangle
      color='primary'
      height={["15vh", "10vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color='secondary'
      height={["50vh", "40vh"]}
      width={["70vw", "40vw"]}
      invertY
    />

    <Triangle
      color='tertiary'
      height={["40vh", "15vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
);

const BingoSection = () => (
  <Section.Container id='Bingo' Background={Background}>
    <Section.Header name='Bingo' icon='🎰' label='Bingo' />
    <Bingo></Bingo>
  </Section.Container>
);

export default BingoSection;
