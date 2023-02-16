import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";
import ArtistCard from '../components/Card/ArtistCard';
import {Stack, Typography} from '@mui/material';


export default function Artists() {

  const navigate = useNavigate();
  
  async function addArtist() {
    try {
      await db.artists.add({
      name: 'Taylor Swift 5',
      genders: ['pop', 'rock'],
      members: ['Taylor Swift'],
      website: 'www.google.com',
      image: 'https://i.imgflip.com/4t0m5.jpg',
  });
    } catch (error) {
        console.log(error);
    }
  }

  // async function updateArtist() {
  //   await db.artists.put({
  //   artistId: 5,
  //   name: 'Taylor Swift 5',
  //   genders: ['pop', 'rock', 'trance'],
  //   members: ['Taylor Swift'],
  //   website: 'www.google.com',
  //   image: 'https://i.imgflip.com/4t0m5.jpg',
  // });
  // }

  // async function deleteArtist(id) {
  //   await db.artists.delete(id);
  // }
  

  const artistList = useLiveQuery(
    () => db.artists.toArray()
  );

  // const getArtistDexie = (id) => {
  //   const artist = artistsDexie?.find((artist) => artist.artistId === id)
  //   return artist;
  // }

  const artists = artistList?.map((artist) => {
    //return <p key={artist.artistId} onClick={() => navigate(`/albums/${artist.artistId}`)}>{artist.name}</p>
    return <ArtistCard key={artist.artistId} artist={artist}/>
  })


  return (
    <Page config={{ pt: 5, pl: 5, pr: 5 }}>
      <Typography variant="h4">All Artists</Typography>
      <Stack spacing={2}>
      {artists}
      </Stack>
    </Page>
  );
}
