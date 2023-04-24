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

export default function RiskLevelPrediction() {
  return (
    <Page title="Risk Level Prediction">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        style={{ paddingTop: "50px" }}
      >
        <Grid item sm={8}>
          <Item>
            <h1 style={{ fontSize: "50px" }}>
              Concerned <br /> About My Risk
            </h1>

            <h4 style={{ paddingBottom: "40px" }}>
              If you are uncertain about your own risk of breast cancer,it can
              help to learn about the known risk factors and steps you can take
              to lower your risk as much as possible.
            </h4>
            <p>
              Everyone has some risk of developing breast cancer,but there are
              many factors that can increase or decrease each individual
              person's breast cancer risk. <a href="#">Learn more</a>
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
                Calculate Risk Level{" "}
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
                U.S breast cancer facts and statistics
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Breast cancer risk factors
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Understanding breast cancer risk
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Exercise,nutrition and maintaining a healthy weight
              </a>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Page>
  );
}
