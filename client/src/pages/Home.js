import { Navigate } from "react-router-dom";
// @mui
import { Container } from "@mui/material";
// components
import Page from "../components/Page";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {
  return (
    <Page title="Home">
      <Container>
        <Hero />
        <FeaturesSection />
      </Container>
    </Page>
  );
}
