import React from 'react'
import { db } from '../db'
import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate, useParams } from "react-router-dom";
import Page from '../components/Page';
import AlbumCard from '../components/Card/AlbumCard';
import { Stack } from '@mui/system';

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

  const songList = useLiveQuery(
    () => db.songs.toArray()
  );

  const songsForAlbum = songList?.filter((song) => {
    return song.albumId === parseInt(id);
  })

  const songs = songsForAlbum?.map((song) => {
    return <p key={song.songId}>{song.title}</p>
  })

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
          <Stack spacing={2}>
            {albums}
          </Stack>
        <button onClick={addAlbum}>Add Album</button>
      </div>
    </Page>  
  );
}
