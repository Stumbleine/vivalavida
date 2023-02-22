export const filterByArtist = (arraySongs, artist) => {
	let filteredSongs = arraySongs.find(song => song.artistId == artist.artistId);
	filteredSongs.forEach(song => {
		song = { ...song, artistName: artist.name };
	});
	return filteredSongs;
};

export const filterByAlbum = (arraySongs, albums) => {
	let filteredSongs = arraySongs.find(song => song.artistId == artist.artistId);
	filteredSongs.forEach(song => {
		song = { ...song, artistName: artist.name };
	});
	return filteredSongs;
};
