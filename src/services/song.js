import { db } from './db';

export const addSong = async song => {
	try {
		await db.song.add(song);
	} catch (e) {
		throw new Error(e);
	}
};

export const updateSong = async song => {
	try {
		await db.song.put(song);
	} catch (e) {
		throw new Error(e);
	}
};

export const deleteSong = async songId => {
	try {
		await db.song.delete(songId);
	} catch (e) {
		throw new Error(e);
	}
};
