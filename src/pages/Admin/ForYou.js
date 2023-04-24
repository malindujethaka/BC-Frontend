import React from "react";
import NavbarVertical from "src/layouts/dashboard/navbar/NavbarVertical";
import { Box, Grid, Typography, Stack, Link, CardMedia } from "@mui/material";

import Image from "src/components/Image";

export default function ForYou() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NavbarVertical />
        </Grid>

        <Grid item xs={9}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            style={{ paddingTop: "50px" }}
          >
            <Grid item md={6}>
              <Typography variant="h2" paragraph>
                Get Start with <br />
                your prediction
              </Typography>
              <Box sx={{ paddingTop: "20px" }}>
                <p>
                  We provide services for medical expertise to predict <br />
                  Patient risk and survival through our system.{" "}
                </p>
              </Box>

              <Box sx={{ width: "100%", paddingTop: "50px" }}>
                <Stack spacing={2}>
                  <Box sx={{ display: "flex" }}>
                    <Link
                      href="#"
                      underline="hover"
                      color="inherit"
                      sx={{ paddingRight: "100px" }}
                    >
                      <h2>
                        Concerned <br /> About My Risk{" "}
                      </h2>
                    </Link>
                    <CardMedia
                      sx={{ width: 100 }}
                      image="/assets/illustrations/illustration_login.png"
                    />
                  </Box>
                  <hr />
                  <Box sx={{ display: "flex" }}>
                    <Link
                      href="#"
                      underline="hover"
                      color="inherit"
                      sx={{ paddingRight: "145px" }}
                    >
                      <h2>
                        In <br /> Treatment{" "}
                      </h2>
                    </Link>
                    <CardMedia
                      sx={{ width: 100 }}
                      image="/assets/illustrations/illustration_login.png"
                    />
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid item md={5}>
              <Image src="/assets/illustrations/illustration_login.png" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
