import React from "react";
import NavbarVertical from "src/layouts/dashboard/navbar/NavbarVertical";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SurvivalPrediction from "../SurvivalPrediction";

export default function AdminSurvivalPrediction() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarVertical />
        </Grid>
        <Grid item xs={10}>
          <SurvivalPrediction />
        </Grid>
      </Grid>
    </Box>
  );
}
