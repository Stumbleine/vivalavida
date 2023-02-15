import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";
import NavigationBtn from "../components/NavigationBtn";

export default function Navbar({ hanldeOpenSideBar }) {
  return (
    <AppBar
      elevation={1}
      sx={{
        bgcolor: "primary.main",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          {/* toolbar icons */}
          <Box></Box>
          {/* navlinks */}
          <Box>
            <NavigationBtn label="My Music" route="/my-music" />
            <NavigationBtn label="Playlists" route="/playlists" />
            <NavigationBtn label="My Tunes" route="/my-tunes" />
            <NavigationBtn label="Artists" route="/artists" />
            <NavigationBtn label="Register" route="/register-tune" />
          </Box>
          {/* options */}
          <Box></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// <Box>
//   <IconButton sx={{ ml: 1 }} onClick={changeMode}>
//     {mode === "dark" ? (
//       <LightModeIcon sx={{ color: "text.icon" }}></LightModeIcon>
//     ) : (
//       <NightlightIcon sx={{ color: "text.icon" }}></NightlightIcon>
//     )}
//   </IconButton>
// </Box>;
