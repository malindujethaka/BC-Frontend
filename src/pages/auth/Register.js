import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Link, Container, Typography } from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// routes
import { PATH_AUTH } from "../../routes/paths";
// components
import Page from "../../components/Page";
// sections
import { RegisterForm } from "../../sections/auth/register";
import { Icon } from "@iconify/react";

import Grid from "@mui/material/Grid";
import Label from "src/components/Label";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");

  return (
    <Page title="Register">
      <RootStyle>
        {/* <Box sx={{}}>
          <Label color="secondary" sx={{ ml: 1 }}>
            HOPE
          </Label>
        </Box> */}
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item sm={4}>
            <Typography
              variant="h3"
              sx={{ px: 5, mt: 10, mb: 5 }}
              textAlign="center"
            >
              Join our <br />
              community
            </Typography>
            <hr />
            <Box>
              <ul>
                <Icon icon="arcticons:nrf-connect" inline={true} /> Connect with
                community members for support and practical information{" "}
              </ul>{" "}
              <br />
              <ul>
                <Icon icon="ic:outline-saved-search" inline={true} /> Get
                answers to your questions from people with shared experience{" "}
              </ul>
              <br />
              <ul>
                <Icon icon="mdi:paper-text-outline" inline={true} /> Information
                peronalized for you. delivered directly to you
              </ul>
              <br />
              <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                <br />
                <Link
                  variant="subtitle2"
                  component={RouterLink}
                  to={PATH_AUTH.register}
                >
                  Watch a message
                </Link>{" "}
                from the Breastcancer.org community
              </Typography>
            </Box>
          </Grid>

          <Grid item sm={6} sx={{ padding: "40px 0 20px 0" }}>
            <RegisterForm />
          </Grid>
        </Grid>
      </RootStyle>
    </Page>
  );
}
