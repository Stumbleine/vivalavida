import React from "react";
import { db } from '../db'
import { useLiveQuery } from 'dexie-react-hooks';
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

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
        <h1>Songs</h1>
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
