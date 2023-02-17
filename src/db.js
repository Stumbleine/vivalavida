import Dexie from 'dexie';

export const db = new Dexie('myTunez');

db.version(3).stores({
  artists: '++artistId, genders, image, members, name, website',
  albums: '++albumId, title, gender, launchYear, coverImage, songs',
  songs:
    '++songId, title, gender, launchYear, artistId, albumId, duration, link',
});

db.open().catch((err) => {
  console.log(err.stack || err);
});
