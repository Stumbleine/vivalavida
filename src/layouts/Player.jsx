import { AppBar, Box, Typography } from "@mui/material";
import React from "react";

export default function Player() {
  return (
    <AppBar
      sx={{
        // position: "sticky",
        bgcolor: "secondary.main",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        top: "90%",
        bottom: 0,
      }}
    >
      <Box
        sx={{
          height: "100%",
          background: "blue",
          p: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>sdas</Typography>
      </Box>
    </AppBar>
  );
}
