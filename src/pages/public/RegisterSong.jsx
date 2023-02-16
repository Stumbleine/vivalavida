import React, { useState } from "react";
import TitlePage from "../../components/TitlePage";
import Page from "../../components/Page";
import { Padding } from "@mui/icons-material";

export default function RegisterSong() {
  const [tittle, setTittle] = useState('')
  const [genere, setGenere] = useState('')
  const [artist, setArtist] = useState('')
  const [album, setAlbum] = useState('')
  const [duration, setDuration] = useState('')
  const [linkMusic, setMusic] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Page config={{ pt: 5, pl: 5, pr: 5 }}>

      <TitlePage title="Registrar cancion" />

      <form sx={{margin: 5}} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tittle">Titulo:</label>
          <input
            type="text"
            id="tittle"
            value={tittle}
            onChange={(event) => setTittle(event.target.value)}
          />
        </div>
        <div>

          <label htmlFor="genere">Genero:</label>
          <input
            type="text"
            id="genere"
            value={genere}
            onChange={(event) => setGenere(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="artist">Artista:</label>
          <textarea
            id="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="album">Album:</label>
          <textarea
            id="text"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration:</label>
          <textarea
            id="text"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="link">Link:</label>
          <textarea
            id="text"
            value={linkMusic}
            onChange={(event) => setMusic(event.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </Page>
  );
}
