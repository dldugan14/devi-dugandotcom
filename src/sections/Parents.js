import React from "react";
import Section from "../components/Section";
import Triangle from "../components/Triangle";
import Carousel from "../components/Carousel/Carousel";
import Fade from "react-reveal/Fade";

const Background = () => (
  <div>
    <Triangle
      color='secondary'
      height={["80vh", "80vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color='primary'
      height={["50vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertX
    />

    <Triangle
      color='tertiary'
      height={["25vh", "40vh"]}
      width={["75vw", "60vw"]}
      invertX
      invertY
    />

    <Triangle
      color='primary'
      height={["25vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertY
    />
  </div>
);

const Parents = () => (
  <Section.Container id='Parents' Background={Background}>
    <Section.Header name='Parents' icon='👪' label='notebook' />
    <Fade bottom>
      <Carousel></Carousel>
    </Fade>
  </Section.Container>
);

export default Parents;
