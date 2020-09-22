import React from "react";
import Layout from "../components/Layout";
import Landing from "../sections/Landing";
import Itinerary from "../sections/Itinerary";
import Projects from "../sections/Projects";
import Writing from "../sections/Writing";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Itinerary />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
