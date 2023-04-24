import { m } from "framer-motion";
import * as React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// components
import Page from "../components/Page";
import Image from "src/components/Image";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 2, 0),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027F" : "#E1E4E6",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
}));

// ----------------------------------------------------------------------

export default function Mammography3() {
  return (
    <Page title="Mammography 3">
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <m.div>
          <Typography variant="h3" paragraph>
            BCSC MAMOGRAPHY DATA
          </Typography>
        </m.div>
      </ContentStyle>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item sm={5}>
          <Item>
            <h1 style={{ color: "blue", paddingBottom: "20px" }}>
              Do I need a <br />
              mammogram?
            </h1>

            <Stack direction="row" spacing={2}>
              <Item>
                <Image
                  style={{ width: 200, height: 200, borderRadius: "50%" }}
                  src="/assets/illustrations/illustration_login.png"
                />
              </Item>
              <Item>
                <p>
                  Clarifying the <br />
                  confusion about who <br />
                  should be screened and how often.
                </p>
              </Item>
            </Stack>
          </Item>
          <Box style={{ textAlign: "center", padding: "20px" }}>
            <Button variant="contained" href="#">
              {" "}
              Read More
            </Button>
          </Box>
        </Grid>

        <Grid item sm={5}>
          <Item>
            <h1 style={{ color: "blue", paddingBottom: "20px" }}>
              Your first <br />
              mammogram
            </h1>

            <Stack direction="row" spacing={2}>
              <Item>
                <Image
                  style={{ width: 200, height: 200, borderRadius: "50%" }}
                  src="/assets/illustrations/illustration_login.png"
                />
              </Item>
              <Item>
                <p>
                  What to expect and how to prepare
                  <br /> for your first screening mammogram.
                </p>
              </Item>
            </Stack>
          </Item>
          <Box style={{ textAlign: "center", padding: "20px" }}>
            <Button variant="contained" href="#">
              {" "}
              Get Started to Test Your Mammography{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
}
