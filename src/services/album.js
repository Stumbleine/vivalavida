import { db } from './db';

export const addAlbum = async album => {
	try {
		await db.album.add(album);
	} catch (e) {
		throw new Error(e);
	}
};

export const updateAlbum = async album => {
	try {
		await db.album.put(album);
	} catch (e) {
		throw new Error(e);
	}
};

export const deleteAlbum = async albumId => {
	try {
		await db.album.delete(albumId);
	} catch (e) {
		throw new Error(e);
	}
};
