import { Typography, AppBar, Toolbar } from '@mui/material';

export default function AlbumHeader ({artist}) {
    
  return (
    <AppBar position="static" sx={{background: `url(${artist?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '20px', height: '30vh'}}>
        <Toolbar sx={{display: 'flex', alignItems: 'flex-end', height: '100%', backdropFilter: 'blur(4px)'}}>
          <Typography variant="h1" sx={{fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 8,}}>
            {artist?.name}
          </Typography>
        </Toolbar>
    </AppBar>
  )
}