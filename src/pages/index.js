import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import Landing from "../sections/Landing";
import Itinerary from "../sections/Itinerary/Itinerary";
import Projects from "../sections/Projects";
import Writing from "../sections/Writing";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPage = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Landing />
        <Itinerary />
        <Projects />
        <Writing />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
