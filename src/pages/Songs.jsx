import React from "react";
import { db } from '../db'
import { useLiveQuery } from 'dexie-react-hooks';
import { useParams } from "react-router-dom";
import Page from "../components/Page";

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

  const songs = songsForAlbum?.map((song) => {
    return <p key={song.songId}>{song.title}</p>
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
