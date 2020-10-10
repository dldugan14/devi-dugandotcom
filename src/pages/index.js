import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import Landing from "../sections/Landing";
import Itinerary from "../sections/Itinerary/Itinerary";
import Projects from "../sections/Projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bingo from "../sections/Bingo";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      <Landing />
      <Itinerary />
      <Projects />
      <Bingo />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
