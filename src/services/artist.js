import { db } from './db';

export const addArtist = async artist => {
	try {
		await db.artist.add(artist);
	} catch (e) {
		throw new Error(e);
	}
};

export const updateArtist = async artist => {
	try {
		await db.artist.put(artist);
	} catch (e) {
		throw new Error(e);
	}
};

export const deletertist = async artistId => {
	try {
		await db.artist.delete(artistId);
	} catch (e) {
		throw new Error(e);
	}
};
// name: artist.name,
// 			genders: artist.genders,
// 			members: artist.members,
// 			website: artist.website,
// 			image: artist.image,
