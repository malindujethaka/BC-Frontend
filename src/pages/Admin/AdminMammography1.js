import React from "react";
import NavbarVertical from "src/layouts/dashboard/navbar/NavbarVertical";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Mammography1 from "../Mammography1";

export default function AdminMammography1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NavbarVertical />
        </Grid>
        <Grid item xs={8}>
          <Mammography1 />
        </Grid>
      </Grid>
    </Box>
  );
}
