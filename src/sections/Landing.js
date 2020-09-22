import React, { Fragment } from "react";
import { Heading, Flex, Box, Text } from "rebass/styled-components";
import { SectionLink } from "react-scroll-section";
import Section from "../components/Section";
import MouseIcon from "../components/MouseIcon";
import Triangle from "../components/Triangle";

const Background = () => (
  <div>
    <Triangle
      color="tertiary"
      height={["35vh", "80vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="secondary"
      height={["38vh", "80vh"]}
      width={["50vw", "35vw"]}
    />

    <Triangle
      color="primary"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      invertX
    />

    <Triangle
      color="tertiary"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Fragment>
      <Heading
        textAlign="center"
        as="h1"
        color="text"
        fontSize={[6, 7]}
        mb={[3, 4, 5]}
      >
        {`Welcome Baby Devi `}
        <span role="img" aria-label="heart">
          🌻
        </span>
      </Heading>
      <SectionLink section="Itinerary">
        {({ onClick }) => <MouseIcon onClick={onClick} />}
      </SectionLink>
    </Fragment>
  </Section.Container>
);

export default LandingPage;
