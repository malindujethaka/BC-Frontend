import React from "react";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import HomeFooter from "./HomeFooter";
import { Box } from "@mui/material";
import Page from "../../components/Page";

export default function HomeIndex() {
  return (
    <Page title="Home">
      <Box>
        <HomeHeader />
        <HomeBody />
        <HomeFooter />
      </Box>
    </Page>
  );
}
