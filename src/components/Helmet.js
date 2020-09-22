import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

const Helmet = ({ theme = {} }) => (
  <ReactHelmet htmlAttributes={{ lang: "en" }}>
    <meta charSet="utf-8" />
    <title>Devi Dugan </title>
    <link rel="apple-touch-icon" sizes="180x180" href={`https://google.com`} />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`https://google.com`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`https://google.com`}
    />
  </ReactHelmet>
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);
