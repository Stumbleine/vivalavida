import { useEffect } from "react";
import { db } from "../db";
import Page from "../components/Page";
import ArtistCard from '../components/Card/ArtistCard';
import {Stack, Typography} from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { initArtists, addArtist } from "../store/ArtistSlice";



export default function Artists() {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.artists.toArray();
        dispatch(initArtists(result));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const artistList = useSelector(state => state.artist);
  
  const saveArtist = async () => {
    try {
      const artist = {
        name: 'Last Dinosaurs 8',
        genders: ['pop', 'rock'],
        members: ['WPC'],
        website: 'www.google.com',
        image: 'https://i.imgflip.com/4t0m5.jpg'
      }
      dispatch(addArtist(artist));
      await db.artists.add(artist);
    } catch (error) {
      console.log(error);
    }
  };

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
  

  // const artistList = useLiveQuery(
  //   () => db.artists.toArray()
  // );

  // const getArtistDexie = (id) => {
  //   const artist = artistsDexie?.find((artist) => artist.artistId === id)
  //   return artist;
  // }

  const artists = artistList?.map((artist) => {
    return <ArtistCard key={artist.artistId} artist={artist}/>
  })


  return (
    <Page config={{ pt: 5, pl: 5, pr: 5 }}>
      <Typography variant="h4">Artists</Typography>
      <Stack spacing={2}>
      {artists}
      </Stack>
    </Page>
  );
}
