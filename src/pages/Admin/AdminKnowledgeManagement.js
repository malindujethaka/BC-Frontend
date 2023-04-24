import React from "react";
import NavbarVertical from "src/layouts/dashboard/navbar/NavbarVertical";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import KnowledgeManagement from "../KnowledgeManagement";

export default function AdminKnowledgeManagement() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NavbarVertical />
        </Grid>
        <Grid item xs={9}>
          <KnowledgeManagement />
        </Grid>
      </Grid>
    </Box>
  );
}
