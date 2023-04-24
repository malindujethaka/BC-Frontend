import * as React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// components
import Page from "../components/Page";
import Image from "src/components/Image";

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027F" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: "left",
}));

// ----------------------------------------------------------------------

export default function SurvivalPrediction() {
  return (
    <Page title="Survival Prediction">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        style={{ paddingTop: "40px" }}
      >
        <Grid item sm={8}>
          <Item>
            <h1 style={{ fontSize: "50px" }}>
              In <br /> Treatment
            </h1>

            <h4 style={{ paddingBottom: "40px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h4>
            <p>
              Everyone has some risk of developing breast cancer,but there are
              many factors that can increase or decrease each individual
              person's breast cancer risk.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <Box style={{ padding: "10px", textAlign: "right" }}>
              <Button
                variant="contained"
                href="#"
                style={{ textAlign: "center" }}
              >
                {" "}
                Predict Survial{" "}
              </Button>
            </Box>
          </Item>
        </Grid>

        <Grid item sm={3}>
          <Item>
            <Image src="/assets/illustrations/illustration_login.png" />

            <Box style={{ padding: "20px" }}>
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Sections
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Managing treatment side effects
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Complementary therepies
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Considering a clinical trial
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Paying for your care
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Breast cancer and your job
              </a>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Page>
  );
}
