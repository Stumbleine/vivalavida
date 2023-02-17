import React from 'react'
import { db } from '../db'
import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate, useParams } from "react-router-dom";
import Page from '../components/Page';
import AlbumCard from '../components/Card/AlbumCard';
import { Stack } from '@mui/system';
import { Typography, AppBar, Toolbar } from '@mui/material';

export default function Albums() {

  const navigate = useNavigate();

  async function addAlbum() {
    await db.albums.add({
    title: 'Album 2',
    artistId: 3,
    gender: 'rock',
    launchYear: '2009',
    coverImage: 'https://i.imgflip.com/4t0m5.jpg',
    songs: ['new year', 'old year'],
  });
  }

  const { id } = useParams();

   const artistList = useLiveQuery(
    () => db.artists.toArray()
  );

  const artist = artistList?.find((artist) => artist.artistId === parseInt(id))

  const albumList = useLiveQuery(
    () => db.albums.toArray()
  );

  const albumsForArtist = albumList?.filter((album) => {
      return album.artistId === parseInt(id);
    })

  const albums = albumsForArtist?.map((album) => {
    return <AlbumCard key={album.albumId} album={album}/>
  })

  return (
    <Page config={{ pt: 5, pl: 5, pr: 5 }}>
      <div>
          <AppBar position="static" sx={{background: `url(${artist?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '20px', height: '30vh'}}>
            <Toolbar sx={{display: 'flex', alignItems: 'flex-end', height: '100%', backdropFilter: 'blur(4px)'}}>
              <Typography variant="h1" sx={{fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 8,}}>
                {artist?.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <Stack spacing={2}>
            {albums}
          </Stack>
        <button onClick={addAlbum}>Add Album</button>
      </div>
    </Page>  
  );
}
