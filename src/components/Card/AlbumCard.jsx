import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export default function AlbumCard ({album}) {
  return (
    <Card sx={{borderRadius: 2, display: 'flex'}}>
      <CardMedia image={album.coverImage} sx={{height: '100%', width: 120}}>
        
      </CardMedia>
      <CardContent>
        <Typography>
          {album.title}
        </Typography>
      </CardContent>
      <CardActions>
        <button>play</button>
      </CardActions>
    </Card>
  )
}
