import Dexie from 'dexie';

export const db = new Dexie('myTunez');

db.version(3).stores({
	artist: '++artistId, genders, image, members, name, website',
	album: '++albumId, artistId,title, gender, launchYear, coverImage, songs',
	song: '++songId, albumId, title, gender, launchYear , duration, link,albumName,asrtistName',
});

db.open().catch(err => {
	console.log(err.stack || err);
});
