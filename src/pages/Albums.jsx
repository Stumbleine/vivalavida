import { db } from '../db'
import { useParams } from "react-router-dom";
import Page from '../components/Page';
import AlbumCard from '../components/Card/AlbumCard';
import { Stack } from '@mui/system';
import AlbumHeader from '../components/Header/AlbumHeader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initAlbums, addAlbum } from '../store/AlbumSlice';


export default function Albums() {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.albums.toArray();
        dispatch(initAlbums(result));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const albumList = useSelector(state => state.album);
  const artistList = useSelector(state => state.artist);
  
  const saveAlbum = async () => {
    try {
      const album = {
        title: 'Album 7',
        artistId: 1,
        gender: 'rock',
        launchYear: '2009',
        coverImage: 'https://i.imgflip.com/4t0m5.jpg',
        songs: ['new year', 'old year'],
      }
      dispatch(addAlbum(album));
      await db.albums.add(album);
    } catch (error) {
      console.log(error);
    }
  };

  const { id } = useParams();

  const artist = artistList?.find((artist) => artist.artistId === parseInt(id))

  const albumsForArtist = albumList?.filter((album) => {
      return album.artistId === parseInt(id);
    })

  const albums = albumsForArtist?.map((album) => {
    return <AlbumCard key={album.albumId} album={album}/>
  })

  return (
    <Page config={{ pt: 5, pl: 5, pr: 5 }}>
      <div>
          <AlbumHeader key={artist?.artistId} artist={artist}/>
          <Stack spacing={2}>
            {albums}
          </Stack>
        <button onClick={saveAlbum}>Add Album</button>
      </div>
    </Page>  
  );
}
