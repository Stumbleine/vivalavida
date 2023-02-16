import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";

export default function AlbumCard ({album}) {

  const navigate = useNavigate();

  return (
    <Card sx={{borderRadius: 2, display: 'flex'}}>
      <CardMedia component={'img'} image={album.coverImage} sx={{height: '100%', width: 120}}>
        
      </CardMedia>
      <CardContent>
        <Typography>{album.title}</Typography>
        <Typography variant='subtitle2'>{album.launchYear}</Typography>
        <Typography variant='caption' sx={{ color: 'gray' }}>{album.gender}</Typography>
      </CardContent>
      <CardActions>
        <button onClick={() => navigate(`/songs/${album.albumId}`)}>Go</button>
      </CardActions>
    </Card>
  )
}
