import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ArtistCard ({artist}) {

  const navigate = useNavigate();
  let i = 0;
  const genders = artist.genders.map((gender) => {
    return (
      <Chip key={i++} label={gender} variant="filled" />
    )
  })

  return (
    <Card sx={{borderRadius: 2, display: 'flex', width: '30%'}}>
      <CardMedia component={'img'} image={artist.image} sx={{height: '100%', width: 120}}>
      </CardMedia>
        <CardContent>
          <Typography>
            {artist.name}
          </Typography>
          {genders}
        </CardContent>
      <CardActions>
        <button onClick={() => navigate(`/albums/${artist.artistId}`)}>Plus</button>
      </CardActions>
    </Card>
  )
}
