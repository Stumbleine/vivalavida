import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export default function ArtistCard ({artist}) {
  return (
    <Card sx={{borderRadius: 2, display: 'flex'}}>
      <CardMedia component={'img'} image={artist.image} sx={{height: '100%', width: 120}}>
        
      </CardMedia>
      <CardContent>
        <Typography>
          {artist.name}
        </Typography>
      </CardContent>
      <CardActions>
        <button>play</button>
      </CardActions>
    </Card>
  )
}
