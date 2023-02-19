import {Typography, AppBar, Toolbar, Avatar } from "@mui/material";

export default function ArtistHeader ({album}) {
  return (
    <AppBar position="static" sx={{background: 'white', color: 'black'}}>
        <Toolbar>
          <Avatar src={album?.coverImage} sx={{ width: 80, height: 80, marginRight: 16}} />
          <Typography variant="h1" sx={{fontSize: 24, fontWeight: 'bold'}}>
            {album?.title}
          </Typography>
        </Toolbar>
    </AppBar>
  )
}