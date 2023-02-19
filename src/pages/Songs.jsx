import {useEffect} from "react";
import { db } from '../db'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { List, ListItem, ListItemText, Typography} from "@mui/material";
import SongHeader from '../components/Header/SongHeader';
import { initSongs, addSong } from "../store/SongSlice";

export default function Songs() {

  const saveSong = async () => {
    try {
      const song = {
        title: 'Song 4',
        gender: 'Rock',
        launchYear: '2009',
        artistId: 1,
        albumId: 1,
        duration: '20',
        link: 'www.google.com',
      }
      dispatch(addSong(song));
      await db.songs.add(song);
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.songs.toArray();
        dispatch(initSongs(result));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const { id } = useParams();

  const albumList = useSelector(state => state.album);
  const songList = useSelector(state => state.song);

  const album = albumList?.find((album) => album.albumId === parseInt(id));

  const songsForAlbum = songList?.filter((song) => {
    return song.albumId === parseInt(id);
  })

  let i = 0;
  const songs = songsForAlbum?.map((song) => {
    i++;
    return (
      <List key={song.title}>
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
        <SongHeader key={album?.albumId} album={album}/>
        {songsForAlbum && songsForAlbum.length > 0 ? (
          <div>{songs}</div>
        ) : (
          <p>There are no songs</p>
        )}
        <button onClick={saveSong}>Add Song</button>
      </div>
    </Page>  
  );
}
