import { m } from "framer-motion";
import * as React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// components
import Image from "src/components/Image";

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text,
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0, 2, 0),
}));

function Textf(props) {
  return (
    <Box style={{ backgroundColor: "#ECD1EC", borderRadius: "5%" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Grid item sm={5}>
          <h3 style={{ paddingTop: "10px" }}> {props.sub}</h3>
        </Grid>
        <Grid item sm={3}>
          <Image
            style={{ width: 100, height: 100 }}
            src="/assets/illustrations/illustration_login.png"
          />
        </Grid>
      </Grid>
      <Box style={{ textAlign: "center" }}>
        <p>{props.des}</p>
      </Box>
      <Box style={{ textAlign: "right" }}>
        <IconButton aria-label="submit" style={{ padding: "10px" }}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

export default function HomeBody() {
  return (
    <container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <m.div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "100px" }}
          >
            <Grid item sm={8}>
              <Item>
                <h1>
                  We Are Ready To Help {"&"} Take Care Your Breast Canser Health{" "}
                </h1>
                <p>
                  {" "}
                  Trusted guidance when us most. Because no one should face
                  breast cancer alone.
                </p>

                <Box style={{ textAlign: "left", padding: "20px" }}>
                  <Button variant="outlined" href="#">
                    {" "}
                    About us
                  </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item sm={4}>
              <Item>
                <Image
                  style={{ width: 200, height: 200 }}
                  src="/assets/illustrations/illustration_login.png"
                />
              </Item>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "100px" }}
          >
            <Grid item sm={6}>
              <Item>
                <Stack spacing={2}>
                  <Item>
                    <Image
                      style={{ width: 200, height: 200 }}
                      src="/assets/illustrations/illustration_login.png"
                    />
                  </Item>
                  <Item>
                    {" "}
                    <Image
                      style={{ width: 200, height: 200 }}
                      src="/assets/illustrations/illustration_login.png"
                    />
                  </Item>
                </Stack>
              </Item>
            </Grid>
            <Grid item sm={6}>
              <Item>
                <h1>
                  We Are Ready To Help {"&"} Take Care Your Breast Canser Health{" "}
                </h1>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the <br />
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>

                <Box style={{ textAlign: "left", padding: "20px" }}>
                  <Button variant="contained" href="#">
                    {" "}
                    Learn More
                  </Button>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "20px" }}
          >
            <Grid item sm={8}>
              <Item>
                <h3>About You</h3>

                <h1>We Are Provide Modern Service Care... </h1>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy text
                  ever.Lorem Ipsum is <br />
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the <br /> industry's standard dummy text
                  ever
                </p>
              </Item>
            </Grid>
            <Grid item sm={4}>
              <Item>
                <Image
                  style={{ width: 200, height: 200 }}
                  src="/assets/illustrations/illustration_login.png"
                />
              </Item>
            </Grid>
          </Grid>

          <Stack direction="row" spacing={2}>
            <Item>
              <Textf
                sub="Concerned about my risk "
                des=" Lorem Ipsum is simply dummy text of  "
              />
            </Item>
            <Item>
              <Textf
                sub="Concerned about my risk "
                des=" Lorem Ipsum is simply dummy text of  "
              />
            </Item>
            <Item>
              <Textf
                sub="Concerned about my risk "
                des=" Lorem Ipsum is simply dummy text of  "
              />
            </Item>
          </Stack>
        </m.div>
      </ContentStyle>
    </container>
  );
}
