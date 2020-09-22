import React from "react";
import styled from "styled-components";
import { Text, Box, Link, Flex } from "rebass/styled-components";
import Fade from "react-reveal/Fade";
import SocialLink from "./SocialLink";

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.text};

  margin-right: 1rem;

  & a {
    color: ${(props) => props.theme.colors.text};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.backgroundDark};
    }
  }
`;

const Footer = () => (
  <Box p={[2, 3]} backgroundColor="secondary" id="footer">
    <FooterContainer>
      <Fade left>
        <TextFooter fontSize={[2, 3]}>
          <span>
            {`Built with love for Devi Sara Dugan from Dad`}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </span>
        </TextFooter>
        <TextFooter>
          <span>
            {" "}
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </span>
        </TextFooter>
      </Fade>
    </FooterContainer>
  </Box>
);

export default Footer;
