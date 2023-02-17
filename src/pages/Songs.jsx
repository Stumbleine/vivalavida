import React from "react";
import { db } from '../db'
import { useLiveQuery } from 'dexie-react-hooks';
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { List, ListItem, ListItemText, Typography, AppBar, Toolbar, Avatar } from "@mui/material";

export default function Songs() {

  async function addSong() {
    await db.songs.add({
    title: 'Song 6',
    gender: 'Rock',
    launchYear: '2009',
    artistId: 1,
    albumId: 2,
    duration: '20',
    link: 'www.google.com',
  }) 
  }

  const { id } = useParams();

  const albumList = useLiveQuery(
    () => db.albums.toArray()
  );

  const album = albumList?.find((album) => album.albumId === parseInt(id));

  const songList = useLiveQuery(
    () => db.songs.toArray()
  );
  
  const songsForAlbum = songList?.filter((song) => {
    return song.albumId === parseInt(id);
  })

  let i = 0;
  const songs = songsForAlbum?.map((song) => {
    i++;
    return (
      <List>
        <ListItem key={song.title}>
           <Typography component='span' variant='body2' sx={{ marginRight: '10px' }}>{i + '.'}</Typography>
          <ListItemText primary={song.title} secondary={song.duration} />
        </ListItem>
      </List>
    )
  })

  return (
    <Page config={{ pt: 5, pl: 5, pr: 5 }}>
      <div>
        <AppBar position="static" sx={{background: 'white', color: 'black'}}>
          <Toolbar>
        <Avatar src={album?.coverImage} sx={{ width: 80, height: 80, marginRight: 16}} />
        <Typography variant="h1" sx={{fontSize: 24, fontWeight: 'bold'}}>
          {album?.title}
        </Typography>
      </Toolbar>
    </AppBar>
        
        {songsForAlbum && songsForAlbum.length > 0 ? (
          <div>{songs}</div>
        ) : (
          <p>There are no songs</p>
        )}
        <button onClick={addSong}>Add Song</button>
      </div>
    </Page>  
  );
}
