import React from "react";
import NavbarVertical from "src/layouts/dashboard/navbar/NavbarVertical";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Mammography2 from "../Mammography2";

export default function AdminMammography2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NavbarVertical />
        </Grid>
        <Grid item xs={9}>
          <Mammography2 />
        </Grid>
      </Grid>
    </Box>
  );
}
