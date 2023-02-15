import { Box, Typography } from "@mui/material";
import React from "react";

export default function SongSummary({ song }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box component="img" src={song.album.cover} />
      <Box>
        <Typography>{song.title}</Typography>
        <Typography>{song.album.name}</Typography>
      </Box>
    </Box>
  );
}

const songExample = {
  title: "",
};
