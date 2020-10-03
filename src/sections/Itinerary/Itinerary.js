import React from "react";
import { Box, Flex, Text } from "rebass/styled-components";
import Fab from "@material-ui/core/Fab";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Section from "../../components/Section";
import Triangle from "../../components/Triangle";
import useStyles from "./styles";

const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={["50vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertY
    />

    <Triangle
      color="primary"
      height={["20vh", "40vh"]}
      width={["75vw", "70vw"]}
      invertX
    />

    <Triangle
      color="tertiary"
      height={["25vh", "20vh"]}
      width={["100vw", "100vw"]}
    />
  </div>
);

const ItineraryContainer = styled("div")`
  display: grid;
  grid-template-columns: auto auto;
  gap: 50px 20px;
`;

const Itinerary = () => {
  const classes = useStyles();

  return (
    <Section.Container id="Itinerary" Background={Background}>
      <Section.Header name="Itinerary" icon="📝" label="Itinerary" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
          <Fade bottom>
            <ItineraryContainer>
              <Text fontSize={[3, 4, 5]} fontWeight="bold" color="text">
                3:00 - 3:15
              </Text>
              <Text fontSize={[3, 4, 5]} color="text">
                Introductions / Greetings
              </Text>
              <Text fontSize={[3, 4, 5]} fontWeight="bold" color="text">
                3:15 - 4:00
              </Text>
              <Text fontSize={[3, 4, 5]} color="text">
                Opening presents and playing bingo
              </Text>
              <Text fontSize={[3, 4, 5]} fontWeight="bold" color="text">
                4:00 - 4:15
              </Text>
              <Text fontSize={[3, 4, 5]} color="text">
                Nursery tour
              </Text>
              <Text fontSize={[3, 4, 5]} fontWeight="bold" color="text">
                4:15 - 5:00
              </Text>
              <Text fontSize={[3, 4, 5]} color="text">
                Advice for the parents-to-be / chit chat
              </Text>
              <div className={classes.buttonContainer}>
                <Fab
                  color="primary"
                  variant="extended"
                  size="large"
                  href="https://dillondugan.com"
                >
                  Join Zoom Call
                </Fab>
              </div>
            </ItineraryContainer>
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

export default Itinerary;
