import React from 'react'
import { db } from '../db'
import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate, useParams } from "react-router-dom";
import Page from '../components/Page';

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

  const albumList = useLiveQuery(
    () => db.albums.toArray()
  );

  const albumsForArtist = albumList?.filter((album) => {
      return album.artistId === parseInt(id);
    })

  const albums = albumsForArtist?.map((album) => {
    return <p key={album.albumId} onClick={() => navigate(`/songs/${album.albumId}`)}>{album.title}</p>
  })

  return (
    <Page config={{ pt: 5, pl: 5, pr: 5 }}>
      <div>
        <h1>Album</h1>
        {albumList && albumList.length > 0 ? (
          <div>{albums}</div>
        ) : (
          <p>There are no albums</p>
        )}
        <button onClick={addAlbum}>Add Album</button>
      </div>
    </Page>  
  );
}
