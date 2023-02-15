import { Box, Button, Drawer, Toolbar } from "@mui/material";
import React from "react";
import NavigationBtn from "../components/NavigationBtn";

export default function Sidebar({}) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          bgcolor: "primary.main",
          width: 200,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button>Agregar</Button>
        <NavigationBtn label="All Artists" route="/artists" />
      </Box>
      <Box sx={{ mr: 1, display: "flex", flexDirection: "column" }}>
        <NavigationBtn label="Artista 1" route="/artists" />
        <NavigationBtn label="Artista 2" route="/artists" />
        <NavigationBtn label="All Artists" route="/artists" />
      </Box>
    </Drawer>
  );
}
