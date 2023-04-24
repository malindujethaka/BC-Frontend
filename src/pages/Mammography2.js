import { m } from "framer-motion";
import * as React from "react";
import { styled } from "@mui/material/styles";
// @mui
import { Button, Typography, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// components
import Page from "../components/Page";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 2, 0),
}));

// ----------------------------------------------------------------------

export default function Mammography2() {
  return (
    <Page title="Mammography 2">
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <m.div>
          <Typography variant="h3" paragraph>
            BCSC MAMOGRAPHY DATA
          </Typography>
        </m.div>
      </ContentStyle>

      <Box sx={{ width: "100%" }}>
        <div style={{ padding: "50px" }}>
          <h3>
            SENSITIVITY AND SPECIFICITY OF SCREENING DIGITAL MAMMOGRAPHY BY
            BI-RADS DENSITY, WOMEN 40-74 YEARS,2005-2010
          </h3>
          <br />
          <h5> N = 585,993 SCREENING EXAMS</h5>
        </div>
      </Box>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <img
            src="https://chartio.com/assets/dfd59f/tutorials/charts/grouped-bar-charts/c1fde6017511bbef7ba9bb245a113c07f8ff32173a7c0d742a4e1eac1930a3c5/grouped-bar-example-1.png"
            alt=" "
          />
        </Container>
      </React.Fragment>
      <div style={{ padding: "50px" }}>
        <h6>The following must be cited when reproducing his data:</h6>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div style={{ padding: "20px", textAlign: "right" }}>
          <Button variant="contained" href="#" style={{ textAlign: "center" }}>
            {" "}
            Get Started to Test Your Mammography{" "}
          </Button>
        </div>
      </div>
    </Page>
  );
}
